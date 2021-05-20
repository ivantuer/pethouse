import { InputType, PartialType } from '@nestjs/graphql';
import AnimalInput from './animal.input';

@InputType()
export class CreateAnimalInput extends PartialType(AnimalInput) {}
