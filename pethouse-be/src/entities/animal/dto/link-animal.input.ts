import { InputType, PickType } from '@nestjs/graphql';
import AnimalInput from './animal.input';

@InputType()
export class LinkAnimalInput extends PickType(AnimalInput, ['id']) {}
