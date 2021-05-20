import { InputType, PickType } from '@nestjs/graphql';
import UserInput from './user.input';

@InputType()
export class LinkUserInput extends PickType(UserInput, ['id']) {}
