import { Module, HttpModule } from "@nestjs/common"
import { UserController } from "./user.controller"
import { UserService } from "./user.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "../../entity/user.entity"

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}