import {
  Injectable,
  InternalServerErrorException,
  Scope,
} from '@nestjs/common';
import { LinkUserInput } from 'src/entities/user/dto/link-user.input';
import { UserRoleEnum } from 'src/entities/user/role.enum';

@Injectable({ scope: Scope.REQUEST })
export class RequestUserService {
  private _role!: UserRoleEnum;
  private _userId!: string;

  get role(): UserRoleEnum {
    return this._role;
  }
  set role(valueIgnored: UserRoleEnum) {
    throw new InternalServerErrorException('private role can not be changed!');
  }

  get userId(): string {
    return this._userId;
  }
  set userId(valueIgnored: string) {
    throw new InternalServerErrorException(
      'private user id can not be changed!',
    );
  }

  setRole(role: UserRoleEnum): void {
    this._role = role;
  }

  setUserId(userId: string): void {
    this._userId = userId;
  }

  getCurrentUser(): LinkUserInput {
    return { id: this.userId };
  }
}
