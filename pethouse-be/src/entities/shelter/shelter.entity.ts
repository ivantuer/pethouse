import { MaxLength } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseDocument } from '../base/base.entity';

@Entity('shelter')
export default class ShelterEntity extends BaseDocument {
  @Column('character varying', { name: 'email', default: '' })
  email: string;

  @Column('character varying', { name: 'title', default: '' })
  @MaxLength(100)
  title: string;

  @Column('character varying', { name: 'address', default: '' })
  address: string;

  @Column('character varying', { name: 'phone', default: '' })
  @MaxLength(25)
  phone: string;
}
