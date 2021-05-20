import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

/** Animal color enum */
export enum AnimalColorEnum {
  /** White */
  White = 'White',
  /** Black */
  Black = 'Black',
  /** Mixed */
  Mixed = 'Mixed',
  /** Other */
  Other = 'Other'
}

/** Animal gender enum */
export enum AnimalGenderEnum {
  /** Male */
  Male = 'Male',
  /** Female */
  Female = 'Female'
}

export type AnimalOrder = {
  id?: Maybe<OrderDirection>;
  createdAt?: Maybe<OrderDirection>;
  deletedAt?: Maybe<OrderDirection>;
  updatedAt?: Maybe<OrderDirection>;
  version?: Maybe<OrderDirection>;
  creator?: Maybe<Scalars['String']>;
  shelter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  isSterilized?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AnimalQueryInput = {
  relations?: Maybe<Array<Scalars['String']>>;
  like?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
  search?: Maybe<SearchInput>;
  startFrom?: Maybe<Scalars['String']>;
  where?: Maybe<AnimalWhere>;
  order?: Maybe<AnimalOrder>;
};

/** Animal status enum */
export enum AnimalStatusEnum {
  /** Adopted */
  Adopted = 'Adopted',
  /** InShelter */
  InShelter = 'InShelter',
  /** OnStreet */
  OnStreet = 'OnStreet',
  /** InFamily */
  InFamily = 'InFamily'
}

export type AnimalType = {
  __typename?: 'AnimalType';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  version: Scalars['Int'];
  creator: PartialUserType;
  shelter?: Maybe<PartialShelterType>;
  name: Scalars['String'];
  age?: Maybe<Scalars['Float']>;
  status?: Maybe<AnimalStatusEnum>;
  gender?: Maybe<AnimalGenderEnum>;
  isSterilized?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  color?: Maybe<AnimalColorEnum>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  type?: Maybe<AnimalTypeEnum>;
};

/** Animal type enum */
export enum AnimalTypeEnum {
  /** Dog */
  Dog = 'Dog',
  /** Cat */
  Cat = 'Cat',
  /** Other */
  Other = 'Other'
}

export type AnimalWhere = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  creator?: Maybe<LinkUserInput>;
  shelter?: Maybe<LinkShelterInput>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  status?: Maybe<AnimalStatusEnum>;
  gender?: Maybe<AnimalGenderEnum>;
  isSterilized?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  color?: Maybe<AnimalColorEnum>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  type?: Maybe<AnimalTypeEnum>;
};

export type CreateAnimalInput = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  creator?: Maybe<LinkUserInput>;
  shelter?: Maybe<LinkShelterInput>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  status?: Maybe<AnimalStatusEnum>;
  gender?: Maybe<AnimalGenderEnum>;
  isSterilized?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  color?: Maybe<AnimalColorEnum>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  type?: Maybe<AnimalTypeEnum>;
};

export type CreateShelterInput = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  shelter?: Maybe<LinkShelterInput>;
};


export type LinkAnimalInput = {
  id?: Maybe<Scalars['ID']>;
};

export type LinkShelterInput = {
  id?: Maybe<Scalars['ID']>;
};

export type LinkUserInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateMyUser: UserType;
  createUser: UserType;
  updateUser: UserType;
  updateUserShelter: UserType;
  deleteUserFromShelter: UserType;
  deleteUser: Scalars['Boolean'];
  createShelter: ShelterType;
  updateShelter: ShelterType;
  deleteShelter: Scalars['Boolean'];
  createAnimal: AnimalType;
  updateAnimal: AnimalType;
  deleteAnimal: Scalars['Boolean'];
};


export type MutationUpdateMyUserArgs = {
  updateUserInput: UpdateMyUserInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserShelterArgs = {
  updateUserShelterInput: UpdateUserShelterInput;
};


export type MutationDeleteUserFromShelterArgs = {
  deleteUserFromShelterInput: LinkUserInput;
};


export type MutationDeleteUserArgs = {
  deleteUserInput: LinkUserInput;
};


export type MutationCreateShelterArgs = {
  createShelterInput: CreateShelterInput;
};


export type MutationUpdateShelterArgs = {
  updateShelterInput: UpdateShelterInput;
};


export type MutationDeleteShelterArgs = {
  deleteShelterInput: LinkShelterInput;
};


export type MutationCreateAnimalArgs = {
  createAnimalInput: CreateAnimalInput;
};


export type MutationUpdateAnimalArgs = {
  updateAnimalInput: UpdateAnimalInput;
};


export type MutationDeleteAnimalArgs = {
  deleteAnimalInput: LinkAnimalInput;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PartialShelterType = {
  __typename?: 'PartialShelterType';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type PartialUserType = {
  __typename?: 'PartialUserType';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  shelter?: Maybe<PartialShelterType>;
};

export type Query = {
  __typename?: 'Query';
  findUser: Array<UserType>;
  me: UserType;
  findShelter: Array<ShelterType>;
  findAnimal: Array<AnimalType>;
  findMyAnimal: Array<AnimalType>;
};


export type QueryFindUserArgs = {
  query: UserQueryInput;
};


export type QueryFindShelterArgs = {
  query: ShelterQueryInput;
};


export type QueryFindAnimalArgs = {
  query: AnimalQueryInput;
};


export type QueryFindMyAnimalArgs = {
  query: AnimalQueryInput;
};

export type SearchInput = {
  query: Scalars['String'];
};

export type ShelterOrder = {
  id?: Maybe<OrderDirection>;
  createdAt?: Maybe<OrderDirection>;
  deletedAt?: Maybe<OrderDirection>;
  updatedAt?: Maybe<OrderDirection>;
  version?: Maybe<OrderDirection>;
  title?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
};

export type ShelterQueryInput = {
  relations?: Maybe<Array<Scalars['String']>>;
  like?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
  search?: Maybe<SearchInput>;
  startFrom?: Maybe<Scalars['String']>;
  where?: Maybe<ShelterWhere>;
  order?: Maybe<ShelterOrder>;
};

export type ShelterType = {
  __typename?: 'ShelterType';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  version: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ShelterWhere = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UpdateAnimalInput = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  creator?: Maybe<LinkUserInput>;
  shelter?: Maybe<LinkShelterInput>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  status?: Maybe<AnimalStatusEnum>;
  gender?: Maybe<AnimalGenderEnum>;
  isSterilized?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  color?: Maybe<AnimalColorEnum>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  type?: Maybe<AnimalTypeEnum>;
};

export type UpdateMyUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  shelter?: Maybe<LinkShelterInput>;
};

export type UpdateShelterInput = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  shelter?: Maybe<LinkShelterInput>;
};

export type UpdateUserShelterInput = {
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<UserRoleEnum>;
  shelter?: Maybe<LinkShelterInput>;
};

export type UserOrder = {
  id?: Maybe<OrderDirection>;
  createdAt?: Maybe<OrderDirection>;
  deletedAt?: Maybe<OrderDirection>;
  updatedAt?: Maybe<OrderDirection>;
  version?: Maybe<OrderDirection>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  shelter?: Maybe<Scalars['String']>;
};

export type UserQueryInput = {
  relations?: Maybe<Array<Scalars['String']>>;
  like?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
  search?: Maybe<SearchInput>;
  startFrom?: Maybe<Scalars['String']>;
  where?: Maybe<UserWhere>;
  order?: Maybe<UserOrder>;
};

/** User role enum */
export enum UserRoleEnum {
  /** SuperAdmin */
  SuperAdmin = 'SuperAdmin',
  /** ShelterAdmin */
  ShelterAdmin = 'ShelterAdmin',
  /** ShelterWorker */
  ShelterWorker = 'ShelterWorker',
  /** User */
  User = 'User'
}

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  version: Scalars['Int'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  shelter?: Maybe<PartialShelterType>;
};

export type UserWhere = {
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  shelter?: Maybe<LinkShelterInput>;
};

export type CreateAnimalMutationVariables = Exact<{
  createAnimalInput: CreateAnimalInput;
}>;


export type CreateAnimalMutation = (
  { __typename?: 'Mutation' }
  & { createAnimal: (
    { __typename?: 'AnimalType' }
    & Pick<AnimalType, 'id' | 'name'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id'>
  ) }
);

export type DeleteAnimalMutationVariables = Exact<{
  deleteAnimalInput: LinkAnimalInput;
}>;


export type DeleteAnimalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAnimal'>
);

export type DeleteUserFromShelterMutationVariables = Exact<{
  deleteUserFromShelterInput: LinkUserInput;
}>;


export type DeleteUserFromShelterMutation = (
  { __typename?: 'Mutation' }
  & { deleteUserFromShelter: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id'>
  ) }
);

export type UpdateAnimalMutationVariables = Exact<{
  updateAnimalInput: UpdateAnimalInput;
}>;


export type UpdateAnimalMutation = (
  { __typename?: 'Mutation' }
  & { updateAnimal: (
    { __typename?: 'AnimalType' }
    & Pick<AnimalType, 'id'>
  ) }
);

export type UpdateMyUserMutationVariables = Exact<{
  updateUserInput: UpdateMyUserInput;
}>;


export type UpdateMyUserMutation = (
  { __typename?: 'Mutation' }
  & { updateMyUser: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id'>
  ) }
);

export type UpdateShelterMutationVariables = Exact<{
  updateShelterInput: UpdateShelterInput;
}>;


export type UpdateShelterMutation = (
  { __typename?: 'Mutation' }
  & { updateShelter: (
    { __typename?: 'ShelterType' }
    & Pick<ShelterType, 'id'>
  ) }
);

export type UpdateUserShelterMutationVariables = Exact<{
  updateUserShelterInput: UpdateUserShelterInput;
}>;


export type UpdateUserShelterMutation = (
  { __typename?: 'Mutation' }
  & { updateUserShelter: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id'>
  ) }
);

export type FindAnimalQueryVariables = Exact<{
  query: AnimalQueryInput;
}>;


export type FindAnimalQuery = (
  { __typename?: 'Query' }
  & { findAnimal: Array<(
    { __typename?: 'AnimalType' }
    & Pick<AnimalType, 'name' | 'status' | 'height' | 'weight' | 'id' | 'isSterilized' | 'gender' | 'age' | 'description' | 'color' | 'imageUrl'>
    & { creator: (
      { __typename?: 'PartialUserType' }
      & Pick<PartialUserType, 'email'>
    ), shelter?: Maybe<(
      { __typename?: 'PartialShelterType' }
      & Pick<PartialShelterType, 'title' | 'id'>
    )> }
  )> }
);

export type FindMyAnimalQueryVariables = Exact<{
  query: AnimalQueryInput;
}>;


export type FindMyAnimalQuery = (
  { __typename?: 'Query' }
  & { findMyAnimal: Array<(
    { __typename?: 'AnimalType' }
    & Pick<AnimalType, 'name' | 'status' | 'height' | 'weight' | 'id' | 'isSterilized' | 'gender' | 'age' | 'description' | 'color' | 'imageUrl'>
    & { creator: (
      { __typename?: 'PartialUserType' }
      & Pick<PartialUserType, 'email'>
    ), shelter?: Maybe<(
      { __typename?: 'PartialShelterType' }
      & Pick<PartialShelterType, 'title'>
    )> }
  )> }
);

export type FindShelterQueryVariables = Exact<{
  query: ShelterQueryInput;
}>;


export type FindShelterQuery = (
  { __typename?: 'Query' }
  & { findShelter: Array<(
    { __typename?: 'ShelterType' }
    & Pick<ShelterType, 'id' | 'title' | 'email' | 'phone' | 'address'>
  )> }
);

export type FindUserQueryVariables = Exact<{
  query: UserQueryInput;
}>;


export type FindUserQuery = (
  { __typename?: 'Query' }
  & { findUser: Array<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'email' | 'firstName' | 'lastName' | 'phone' | 'jobPosition' | 'role' | 'id'>
    & { shelter?: Maybe<(
      { __typename?: 'PartialShelterType' }
      & Pick<PartialShelterType, 'title' | 'id'>
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'email' | 'firstName' | 'lastName' | 'phone' | 'jobPosition' | 'role' | 'id'>
    & { shelter?: Maybe<(
      { __typename?: 'PartialShelterType' }
      & Pick<PartialShelterType, 'title' | 'id'>
    )> }
  ) }
);


export const CreateAnimalDocument = gql`
    mutation CreateAnimal($createAnimalInput: CreateAnimalInput!) {
  createAnimal(createAnimalInput: $createAnimalInput) {
    id
    name
  }
}
    `;
export type CreateAnimalMutationFn = Apollo.MutationFunction<CreateAnimalMutation, CreateAnimalMutationVariables>;

/**
 * __useCreateAnimalMutation__
 *
 * To run a mutation, you first call `useCreateAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnimalMutation, { data, loading, error }] = useCreateAnimalMutation({
 *   variables: {
 *      createAnimalInput: // value for 'createAnimalInput'
 *   },
 * });
 */
export function useCreateAnimalMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnimalMutation, CreateAnimalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnimalMutation, CreateAnimalMutationVariables>(CreateAnimalDocument, options);
      }
export type CreateAnimalMutationHookResult = ReturnType<typeof useCreateAnimalMutation>;
export type CreateAnimalMutationResult = Apollo.MutationResult<CreateAnimalMutation>;
export type CreateAnimalMutationOptions = Apollo.BaseMutationOptions<CreateAnimalMutation, CreateAnimalMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteAnimalDocument = gql`
    mutation DeleteAnimal($deleteAnimalInput: LinkAnimalInput!) {
  deleteAnimal(deleteAnimalInput: $deleteAnimalInput)
}
    `;
export type DeleteAnimalMutationFn = Apollo.MutationFunction<DeleteAnimalMutation, DeleteAnimalMutationVariables>;

/**
 * __useDeleteAnimalMutation__
 *
 * To run a mutation, you first call `useDeleteAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnimalMutation, { data, loading, error }] = useDeleteAnimalMutation({
 *   variables: {
 *      deleteAnimalInput: // value for 'deleteAnimalInput'
 *   },
 * });
 */
export function useDeleteAnimalMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAnimalMutation, DeleteAnimalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAnimalMutation, DeleteAnimalMutationVariables>(DeleteAnimalDocument, options);
      }
export type DeleteAnimalMutationHookResult = ReturnType<typeof useDeleteAnimalMutation>;
export type DeleteAnimalMutationResult = Apollo.MutationResult<DeleteAnimalMutation>;
export type DeleteAnimalMutationOptions = Apollo.BaseMutationOptions<DeleteAnimalMutation, DeleteAnimalMutationVariables>;
export const DeleteUserFromShelterDocument = gql`
    mutation DeleteUserFromShelter($deleteUserFromShelterInput: LinkUserInput!) {
  deleteUserFromShelter(deleteUserFromShelterInput: $deleteUserFromShelterInput) {
    id
  }
}
    `;
export type DeleteUserFromShelterMutationFn = Apollo.MutationFunction<DeleteUserFromShelterMutation, DeleteUserFromShelterMutationVariables>;

/**
 * __useDeleteUserFromShelterMutation__
 *
 * To run a mutation, you first call `useDeleteUserFromShelterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserFromShelterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserFromShelterMutation, { data, loading, error }] = useDeleteUserFromShelterMutation({
 *   variables: {
 *      deleteUserFromShelterInput: // value for 'deleteUserFromShelterInput'
 *   },
 * });
 */
export function useDeleteUserFromShelterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserFromShelterMutation, DeleteUserFromShelterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserFromShelterMutation, DeleteUserFromShelterMutationVariables>(DeleteUserFromShelterDocument, options);
      }
export type DeleteUserFromShelterMutationHookResult = ReturnType<typeof useDeleteUserFromShelterMutation>;
export type DeleteUserFromShelterMutationResult = Apollo.MutationResult<DeleteUserFromShelterMutation>;
export type DeleteUserFromShelterMutationOptions = Apollo.BaseMutationOptions<DeleteUserFromShelterMutation, DeleteUserFromShelterMutationVariables>;
export const UpdateAnimalDocument = gql`
    mutation UpdateAnimal($updateAnimalInput: UpdateAnimalInput!) {
  updateAnimal(updateAnimalInput: $updateAnimalInput) {
    id
  }
}
    `;
export type UpdateAnimalMutationFn = Apollo.MutationFunction<UpdateAnimalMutation, UpdateAnimalMutationVariables>;

/**
 * __useUpdateAnimalMutation__
 *
 * To run a mutation, you first call `useUpdateAnimalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnimalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnimalMutation, { data, loading, error }] = useUpdateAnimalMutation({
 *   variables: {
 *      updateAnimalInput: // value for 'updateAnimalInput'
 *   },
 * });
 */
export function useUpdateAnimalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnimalMutation, UpdateAnimalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnimalMutation, UpdateAnimalMutationVariables>(UpdateAnimalDocument, options);
      }
export type UpdateAnimalMutationHookResult = ReturnType<typeof useUpdateAnimalMutation>;
export type UpdateAnimalMutationResult = Apollo.MutationResult<UpdateAnimalMutation>;
export type UpdateAnimalMutationOptions = Apollo.BaseMutationOptions<UpdateAnimalMutation, UpdateAnimalMutationVariables>;
export const UpdateMyUserDocument = gql`
    mutation UpdateMyUser($updateUserInput: UpdateMyUserInput!) {
  updateMyUser(updateUserInput: $updateUserInput) {
    id
  }
}
    `;
export type UpdateMyUserMutationFn = Apollo.MutationFunction<UpdateMyUserMutation, UpdateMyUserMutationVariables>;

/**
 * __useUpdateMyUserMutation__
 *
 * To run a mutation, you first call `useUpdateMyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyUserMutation, { data, loading, error }] = useUpdateMyUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateMyUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyUserMutation, UpdateMyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyUserMutation, UpdateMyUserMutationVariables>(UpdateMyUserDocument, options);
      }
export type UpdateMyUserMutationHookResult = ReturnType<typeof useUpdateMyUserMutation>;
export type UpdateMyUserMutationResult = Apollo.MutationResult<UpdateMyUserMutation>;
export type UpdateMyUserMutationOptions = Apollo.BaseMutationOptions<UpdateMyUserMutation, UpdateMyUserMutationVariables>;
export const UpdateShelterDocument = gql`
    mutation UpdateShelter($updateShelterInput: UpdateShelterInput!) {
  updateShelter(updateShelterInput: $updateShelterInput) {
    id
  }
}
    `;
export type UpdateShelterMutationFn = Apollo.MutationFunction<UpdateShelterMutation, UpdateShelterMutationVariables>;

/**
 * __useUpdateShelterMutation__
 *
 * To run a mutation, you first call `useUpdateShelterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShelterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShelterMutation, { data, loading, error }] = useUpdateShelterMutation({
 *   variables: {
 *      updateShelterInput: // value for 'updateShelterInput'
 *   },
 * });
 */
export function useUpdateShelterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShelterMutation, UpdateShelterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShelterMutation, UpdateShelterMutationVariables>(UpdateShelterDocument, options);
      }
export type UpdateShelterMutationHookResult = ReturnType<typeof useUpdateShelterMutation>;
export type UpdateShelterMutationResult = Apollo.MutationResult<UpdateShelterMutation>;
export type UpdateShelterMutationOptions = Apollo.BaseMutationOptions<UpdateShelterMutation, UpdateShelterMutationVariables>;
export const UpdateUserShelterDocument = gql`
    mutation UpdateUserShelter($updateUserShelterInput: UpdateUserShelterInput!) {
  updateUserShelter(updateUserShelterInput: $updateUserShelterInput) {
    id
  }
}
    `;
export type UpdateUserShelterMutationFn = Apollo.MutationFunction<UpdateUserShelterMutation, UpdateUserShelterMutationVariables>;

/**
 * __useUpdateUserShelterMutation__
 *
 * To run a mutation, you first call `useUpdateUserShelterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserShelterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserShelterMutation, { data, loading, error }] = useUpdateUserShelterMutation({
 *   variables: {
 *      updateUserShelterInput: // value for 'updateUserShelterInput'
 *   },
 * });
 */
export function useUpdateUserShelterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserShelterMutation, UpdateUserShelterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserShelterMutation, UpdateUserShelterMutationVariables>(UpdateUserShelterDocument, options);
      }
export type UpdateUserShelterMutationHookResult = ReturnType<typeof useUpdateUserShelterMutation>;
export type UpdateUserShelterMutationResult = Apollo.MutationResult<UpdateUserShelterMutation>;
export type UpdateUserShelterMutationOptions = Apollo.BaseMutationOptions<UpdateUserShelterMutation, UpdateUserShelterMutationVariables>;
export const FindAnimalDocument = gql`
    query FindAnimal($query: AnimalQueryInput!) {
  findAnimal(query: $query) {
    name
    status
    height
    weight
    creator {
      email
    }
    shelter {
      title
      id
    }
    id
    isSterilized
    gender
    age
    description
    color
    imageUrl
  }
}
    `;

/**
 * __useFindAnimalQuery__
 *
 * To run a query within a React component, call `useFindAnimalQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAnimalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAnimalQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useFindAnimalQuery(baseOptions: Apollo.QueryHookOptions<FindAnimalQuery, FindAnimalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAnimalQuery, FindAnimalQueryVariables>(FindAnimalDocument, options);
      }
export function useFindAnimalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAnimalQuery, FindAnimalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAnimalQuery, FindAnimalQueryVariables>(FindAnimalDocument, options);
        }
export type FindAnimalQueryHookResult = ReturnType<typeof useFindAnimalQuery>;
export type FindAnimalLazyQueryHookResult = ReturnType<typeof useFindAnimalLazyQuery>;
export type FindAnimalQueryResult = Apollo.QueryResult<FindAnimalQuery, FindAnimalQueryVariables>;
export const FindMyAnimalDocument = gql`
    query FindMyAnimal($query: AnimalQueryInput!) {
  findMyAnimal(query: $query) {
    name
    status
    height
    weight
    creator {
      email
    }
    shelter {
      title
    }
    id
    isSterilized
    gender
    age
    description
    color
    imageUrl
  }
}
    `;

/**
 * __useFindMyAnimalQuery__
 *
 * To run a query within a React component, call `useFindMyAnimalQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyAnimalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyAnimalQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useFindMyAnimalQuery(baseOptions: Apollo.QueryHookOptions<FindMyAnimalQuery, FindMyAnimalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyAnimalQuery, FindMyAnimalQueryVariables>(FindMyAnimalDocument, options);
      }
export function useFindMyAnimalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyAnimalQuery, FindMyAnimalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyAnimalQuery, FindMyAnimalQueryVariables>(FindMyAnimalDocument, options);
        }
export type FindMyAnimalQueryHookResult = ReturnType<typeof useFindMyAnimalQuery>;
export type FindMyAnimalLazyQueryHookResult = ReturnType<typeof useFindMyAnimalLazyQuery>;
export type FindMyAnimalQueryResult = Apollo.QueryResult<FindMyAnimalQuery, FindMyAnimalQueryVariables>;
export const FindShelterDocument = gql`
    query FindShelter($query: ShelterQueryInput!) {
  findShelter(query: $query) {
    id
    title
    email
    phone
    address
  }
}
    `;

/**
 * __useFindShelterQuery__
 *
 * To run a query within a React component, call `useFindShelterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindShelterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindShelterQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useFindShelterQuery(baseOptions: Apollo.QueryHookOptions<FindShelterQuery, FindShelterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindShelterQuery, FindShelterQueryVariables>(FindShelterDocument, options);
      }
export function useFindShelterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindShelterQuery, FindShelterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindShelterQuery, FindShelterQueryVariables>(FindShelterDocument, options);
        }
export type FindShelterQueryHookResult = ReturnType<typeof useFindShelterQuery>;
export type FindShelterLazyQueryHookResult = ReturnType<typeof useFindShelterLazyQuery>;
export type FindShelterQueryResult = Apollo.QueryResult<FindShelterQuery, FindShelterQueryVariables>;
export const FindUserDocument = gql`
    query FindUser($query: UserQueryInput!) {
  findUser(query: $query) {
    email
    firstName
    lastName
    phone
    jobPosition
    role
    id
    shelter {
      title
      id
    }
  }
}
    `;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    email
    firstName
    lastName
    phone
    jobPosition
    role
    id
    role
    shelter {
      title
      id
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;