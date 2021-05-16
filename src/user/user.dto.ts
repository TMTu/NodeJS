import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
@Injectable()
export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  description: string;
}

export class UserUpdateDTO {

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  description: string;
}

export class ListtUserRequestDTO {

  @ApiProperty({required : false})
  email: string[];

  @ApiProperty({required : false})
  id: string[];

  @ApiProperty()
  limit: number;

  @ApiProperty()
  page: number;
}