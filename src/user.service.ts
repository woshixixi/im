import { Injectable, HttpService } from "@nestjs/common"
import { Observable } from "rxjs"
import { AxiosResponse, AxiosRequestConfig } from "axios"
import { UserAPI } from "./utils/common.urls"
import { HeaderBuilder } from "./utils/common.headerBuilder"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from "./entity/user.entity"

const postData: object = {
  accid: "czhang",
  props: "",
  token: "",
  icon: ""
}

export interface RespUser {}

@Injectable()
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  updateUserInfo(): Observable<AxiosResponse<RespUser>> {
    const header = new HeaderBuilder()
    const headConfig: AxiosRequestConfig = header.genHeader()
    const sendBody = header.genStringfyData(postData)
    return this.httpService.post(UserAPI.updateUser, sendBody, headConfig)
  }

  createUser(): Observable<AxiosResponse<RespUser>> {
    const header = new HeaderBuilder()
    const headConfig: AxiosRequestConfig = header.genHeader()
    return this.httpService.post(UserAPI.createUser, "", headConfig)
  }

  createUserTest(): any {
    console.log("...", this.userRepository)
    return ""
  }
}
