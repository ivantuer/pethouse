import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import AnimalRequestInput from './animal-request.input';

@InputType()
export class UpdateAnimalRequestInput extends PartialType(AnimalRequestInput) {}
