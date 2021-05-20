import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import AnimalInput from './animal.input';

@InputType()
export class UpdateAnimalInput extends PartialType(AnimalInput) {}
