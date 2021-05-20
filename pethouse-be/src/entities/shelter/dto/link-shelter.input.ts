import { InputType, PickType } from '@nestjs/graphql';
import ShelterInput from './shelter.input';

@InputType()
export class LinkShelterInput extends PickType(ShelterInput, ['id']) {}
