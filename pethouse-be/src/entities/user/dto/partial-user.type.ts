import { ObjectType, PartialType } from '@nestjs/graphql';
import UserType from './user.type';

@ObjectType()
export class PartialUserType extends PartialType(UserType) {}
