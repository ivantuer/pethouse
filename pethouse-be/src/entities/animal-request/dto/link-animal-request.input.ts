import { InputType, PickType } from '@nestjs/graphql';
import AnimalRequestInput from './animal-request.input';

@InputType()
export class LinkAnimalRequestInput extends PickType(AnimalRequestInput, [
  'id',
]) {}
