import { Controller, Get, Req, Body, Query, Post, Put, Delete, Param, Injectable } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { ListtUserRequestDTO, UserDto, UserUpdateDTO } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
@Injectable()
@ApiTags('user')
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get("/ping")
  @ApiOkResponse({description:"Hello World"})

  getHello(): string {
    return this.userService.ping();
  }

  @Get("info")
  getUser(@Query('id') id: string): Promise<User> {
    return this.userService.getUser(id)
  }
  
  @Get("list")
  getUsers(@Query() req : ListtUserRequestDTO): Promise<User> {
    return this.userService.getUsers(req)
  }

  @Put("info")
  updateUser(@Query("id") id: string, @Body() req: UserUpdateDTO) : Promise<any>{
    return this.userService.updateUser(id, req)
  }

  @Post()
  createUser(@Body() req: UserDto) : Promise<any>{
    return this.userService.createUser(req)
  }

  @Delete()
  deleteUser(@Query("id") id : string) : Promise<any>{
    return this.userService.deleteUser(id)
  }
}
