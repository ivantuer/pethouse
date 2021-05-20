import { ObjectType, PartialType } from '@nestjs/graphql';
import ShelterType from './shelter.type';

@ObjectType()
export class PartialShelterType extends PartialType(ShelterType) {}
