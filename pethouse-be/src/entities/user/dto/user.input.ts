import { Field, InputType } from '@nestjs/graphql';
import { BaseDocumentInput } from 'src/entities/base/dto/base.input';
import { LinkShelterInput } from 'src/entities/shelter/dto/link-shelter.input';
import { UserRoleEnum } from '../role.enum';
import UserEntity from '../user.entity';

@InputType()
export default class UserInput extends BaseDocumentInput implements UserEntity {
  @Field()
  email!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  phone!: string;

  @Field()
  jobPosition!: string;

  @Field(() => UserRoleEnum)
  role!: UserRoleEnum;

  @Field()
  shelter!: LinkShelterInput;
}
