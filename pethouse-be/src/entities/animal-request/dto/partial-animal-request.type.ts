import { ObjectType, PartialType } from '@nestjs/graphql';
import AnimalRequestType from './animal-request.type';

@ObjectType()
export class PartialAnimalRequestType extends PartialType(AnimalRequestType) {}
