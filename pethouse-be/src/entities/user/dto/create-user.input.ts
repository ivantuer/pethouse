import { InputType, PartialType } from '@nestjs/graphql';
import UserInput from './user.input';

@InputType()
export class CreateUserInput extends PartialType(UserInput) {}
