import { Controller, Get } from "@nestjs/common"
import { UserService } from "./user.service"

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello()
  }

  @Get("user")
  updateUser(): any {
    this.userService
      .updateUserInfo()
      .subscribe(resp => console.log("response...:", resp.data))
    return null
  }
}
