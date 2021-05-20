import { registerEnumType } from '@nestjs/graphql';

export enum AnimalStatusEnum {
  Adopted = 'Adopted',
  InShelter = 'InShelter',
  OnStreet = 'OnStreet',
  InFamily = 'InFamily',
}

registerEnumType(AnimalStatusEnum, {
  name: 'AnimalStatusEnum',
  description: 'Animal status enum',
  valuesMap: {
    Adopted: { description: 'Adopted' },
    InShelter: { description: 'InShelter' },
    OnStreet: { description: 'OnStreet' },
    InFamily: { description: 'InFamily' },
  },
});

export enum AnimalGenderEnum {
  Male = 'Male',
  Female = 'Female',
}

registerEnumType(AnimalGenderEnum, {
  name: 'AnimalGenderEnum',
  description: 'Animal gender enum',
  valuesMap: {
    Male: { description: 'Male' },
    Female: { description: 'Female' },
  },
});

export enum AnimalColorEnum {
  White = 'White',
  Black = 'Black',
  Mixed = 'Mixed',
  Other = 'Other',
}

registerEnumType(AnimalColorEnum, {
  name: 'AnimalColorEnum',
  description: 'Animal color enum',
  valuesMap: {
    White: { description: 'White' },
    Black: { description: 'Black' },
    Mixed: { description: 'Mixed' },
    Other: { description: 'Other' },
  },
});

export enum AnimalTypeEnum {
  Dog = 'Dog',
  Cat = 'Cat',
  Other = 'Other',
}

registerEnumType(AnimalTypeEnum, {
  name: 'AnimalTypeEnum',
  description: 'Animal type enum',
  valuesMap: {
    Dog: { description: 'Dog' },
    Cat: { description: 'Cat' },
    Other: { description: 'Other' },
  },
});
