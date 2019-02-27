import { Injectable, HttpService } from "@nestjs/common"
import { Observable } from "rxjs"
import { User } from "./interfaces/user.interfaces"
import { AxiosResponse, AxiosRequestConfig } from "axios"

const getUserUrl: string =
  "https://api.netease.im/nimserver/user/getUinfos.action"

const postData: object = {
  accids: "yskj_admin"
}

export interface RespUser {}

const headConfig: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    AppKey: "2723b412c032161d5f240aaa61b929cd",
    Nonce: "yskj2407",
    CurTime: Date.now(),
    CheckSum: "a0ea25b77e489a9b3e835e8e13fec6ae529968f6"
  }
}

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  private readonly users: User[] = []

  getHello(): string {
    return "Hello World!"
  }

  getUserInfo(): Observable<AxiosResponse<RespUser>> {
    return this.httpService.post(getUserUrl, postData, headConfig)
  }
}
