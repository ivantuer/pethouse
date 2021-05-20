import { InputType, PartialType } from '@nestjs/graphql';
import ShelterInput from './shelter.input';

@InputType()
export class CreateShelterInput extends PartialType(ShelterInput) {}
