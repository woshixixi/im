import { UserService } from "./user.service";
import { CreateUserDto } from "../../dto/create-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    updateUser(): any;
    createUser(createUserDto: CreateUserDto): any;
    testApi(): any;
}
