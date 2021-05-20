import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import UserInput from './user.input';

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(UserInput, ['email']),
) {}

@InputType()
export class UpdateUserShelterInput extends PartialType(
  PickType(UserInput, ['id', 'shelter', 'role']),
) {}

@InputType()
export class UpdateMyUserInput extends PartialType(
  OmitType(UserInput, ['email', 'id', 'role']),
) {}
