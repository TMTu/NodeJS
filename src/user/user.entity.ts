import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("User")
export class User {

  @PrimaryColumn({name: 'id', type: 'text', default: "1"})
  id: string;

  @Column({name: 'username', type: 'text', default: ""})
  username: string;

  @Column({name: 'email', type: 'text', default: ""})
  email: string;

  @Column({name: 'first_name', type: 'text', default: ""})
  firstName: string;

  @Column({name: 'last_name', type: 'text', default: ""})
  lastName: string;

  @Column({name: 'description', type: 'text', default: ""})
  description:  string;

}