import { ObjectType, PartialType } from '@nestjs/graphql';
import AnimalType from './animal.type';

@ObjectType()
export class PartialAnimalType extends PartialType(AnimalType) {}
