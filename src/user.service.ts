import { Injectable, HttpService } from "@nestjs/common"
import { Observable } from "rxjs"
import { User } from "./interfaces/user.interfaces"
import { AxiosResponse, AxiosRequestConfig } from "axios"
import { UserAPI } from "./utils/common.urls"
import { HeaderBuilder } from "./utils/common.headerBuilder"

const postData: object = {
  accid: "czhang",
  props: "",
  token: "",
  icon: ""
}

export interface RespUser {}

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  private readonly users: User[] = []

  getHello(): string {
    return "Hello World!"
  }

  updateUserInfo(): Observable<AxiosResponse<RespUser>> {
    const header = new HeaderBuilder()
    const headConfig: AxiosRequestConfig = header.genHeader()
    const sendBody = header.genStringfyData(postData)
    return this.httpService.post(UserAPI.updateUser, sendBody, headConfig)
  }
}
