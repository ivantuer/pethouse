import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import ShelterInput from './shelter.input';

@InputType()
export class UpdateShelterInput extends PartialType(ShelterInput) {}
