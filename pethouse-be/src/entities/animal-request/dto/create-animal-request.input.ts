import { InputType, PartialType } from '@nestjs/graphql';
import AnimalRequestInput from './animal-request.input';

@InputType()
export class CreateAnimalRequestInput extends PartialType(AnimalRequestInput) {}
