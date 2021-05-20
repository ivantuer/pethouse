import { registerEnumType } from '@nestjs/graphql';

export enum AnimalRequestStatusEnum {
  Open = 'Open',
  Approved = 'Resolved',
  Declined = 'Rejected',
}

registerEnumType(AnimalRequestStatusEnum, {
  name: 'AnimalRequestStatusEnum',
  description: 'Animalrequest status enum',
  valuesMap: {
    Open: { description: 'Open' },
    Approved: { description: 'Resolved' },
    Declined: { description: 'Rejected' },
  },
});
