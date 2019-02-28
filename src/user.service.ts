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

  getUserInfo(): Observable<AxiosResponse<RespUser>> {
    const headConfig: AxiosRequestConfig = new HeaderBuilder().genHeader()

    let formBody = []
    for (let property in postData) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(postData[property])
      formBody.push(encodedKey + "=" + encodedValue)
    }
    let sendBody = formBody.join("&")
    console.log("postData...", sendBody)

    return this.httpService.post(UserAPI.updateUser, sendBody, headConfig)
  }
}
