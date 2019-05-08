import { HttpService } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
export interface RespUser {
}
export declare class UserService {
    private readonly httpService;
    private readonly userRepository;
    constructor(httpService: HttpService, userRepository: Repository<User>);
    updateUserInfo(): Observable<AxiosResponse<RespUser>>;
    createUser(): Observable<AxiosResponse<RespUser>>;
    createUserTest(): any;
}
