import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleEnum {
  SuperAdmin = 'SuperAdmin',
  ShelterAdmin = 'ShelterAdmin',
  ShelterWorker = 'ShelterWorker',
  User = 'User',
}

registerEnumType(UserRoleEnum, {
  name: 'UserRoleEnum',
  description: 'User role enum',
  valuesMap: {
    SuperAdmin: { description: 'SuperAdmin' },
    ShelterAdmin: { description: 'ShelterAdmin' },
    ShelterWorker: { description: 'ShelterWorker' },
    User: { description: 'User' },
  },
});
