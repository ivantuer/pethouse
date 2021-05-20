import {
  CanActivate,
  ExecutionContext,
  HttpService,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DecodedJwtType, Keys, KeysArray } from 'src/types/auth.types';
import { decode, Secret, verify } from 'jsonwebtoken';
import * as jwkToPem from 'jwk-to-pem';
import { GqlExecutionContext } from '@nestjs/graphql';
import { RequestUserService } from 'src/services/requestUser/requestUser.service';

const debugMode = false;

@Injectable()
export class AuthGuard implements CanActivate {
  private keys;
  public userPoolId: string = process.env.COGNITO_USER_POOL_ID;
  public clientId: string = process.env.COGNITO_CLIENT_ID;
  public region: string = process.env.COGNITO_REGION;
  public authority = `https://cognito-idp.${process.env.COGNITO_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`;

  constructor(
    private readonly httpService: HttpService,
    private readonly requestUserService: RequestUserService,
  ) {
    console.log(this.authority);
    console.log(debugMode);
  }

  async canActivate(
    ctx: ExecutionContext & { contextType: string },
  ): Promise<boolean> {
    const gqlCtx = GqlExecutionContext.create(ctx);
    console.log(gqlCtx);
    console.log('DEBUG MODE GOES HERE');
    console.log(debugMode);
    const req =
      ctx['contextType'] === 'graphql'
        ? gqlCtx.getContext().req
        : ctx.switchToHttp().getRequest<{ headers: Record<string, string> }>();

    const token =
      req.headers['Authorization'] || req.headers['authorization'] || '';

    if (debugMode) {
      this.requestUserService.setUserId(req.headers['du-id']);
      return true;
    }

    console.log(token);

    const keys = (await this._getKeys()).keys;

    console.log(keys);

    const decodedJwt = this._decodeJwt(token);

    this.requestUserService.setUserId(decodedJwt.payload.sub as any);

    const pem = this._getPem(keys, decodedJwt);

    console.log(pem);

    const result = Boolean(await verify(token, pem));

    console.log(result);

    // this.updateRequestUser(ctx, decodedJwt);

    return result;
  }

  private _decodeJwt(token: string): DecodedJwtType {
    const decodedJwt = decode(token, { complete: true });

    console.log(decodedJwt);
    if (!decodedJwt || typeof decodedJwt === 'string') {
      throw new UnauthorizedException('Not a valid JWT token');
    }
    return decodedJwt;
  }

  private _getPem(keys: KeysArray, decodedJwt: DecodedJwtType): Secret {
    const pems: Record<string, string> = {};
    for (const key of keys) {
      const jwk = { kty: key.kty as 'RSA', n: key.n, e: key.e };
      pems[key.kid] = jwkToPem(jwk);
    }
    if (typeof decodedJwt.header === 'object') {
      const kid = decodedJwt.header.kid;

      const pem = pems[kid];

      if (!pem) {
        throw new UnauthorizedException('Invalid token');
      }

      return pem;
    } else {
      throw new InternalServerErrorException(
        "Can't get kid from header which type is string",
      );
    }
  }

  private async _getKeys(): Promise<Keys> {
    const url = `https://cognito-idp.${this.region}.amazonaws.com/${this.userPoolId}/.well-known/jwks.json`;
    if (this.keys) {
      return this.keys;
    } else {
      this.keys = (await this.httpService.get<Keys>(url).toPromise()).data;
      return this.keys;
    }
  }
}
