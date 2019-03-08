import { Controller, Get, Post, Body } from "@nestjs/common"
import { UserService } from "./user.service"
import { CreateUserDto } from "../../dto/create-user.dto"

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("user")
  updateUser(): any {
    this.userService
      .updateUserInfo()
      .subscribe(resp => console.log("response...:", resp.data))
    return null
  }

  @Post("user")
  createUser(@Body() createUserDto: CreateUserDto): any {
    this.userService.createUserTest()
    // this.userService
    //   .createUser()
    //   .subscribe(resp => console.log("response...:", resp.data))
    return null
  }

  @Get("testuser")
  testApi(): any {
    return this.userService.testUserAPI()
    // return "hellow"
  }
}
