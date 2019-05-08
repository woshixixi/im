"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const common_urls_1 = require("../../utils/common.urls");
const common_headerBuilder_1 = require("../../utils/common.headerBuilder");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../entity/user.entity");
const postData = {
    accid: "czhang",
    props: "",
    token: "",
    icon: ""
};
let UserService = class UserService {
    constructor(httpService, userRepository) {
        this.httpService = httpService;
        this.userRepository = userRepository;
    }
    updateUserInfo() {
        const header = new common_headerBuilder_1.HeaderBuilder();
        const headConfig = header.genHeader();
        const sendBody = header.genStringfyData(postData);
        return this.httpService.post(common_urls_1.UserAPI.updateUser, sendBody, headConfig);
    }
    createUser() {
        const header = new common_headerBuilder_1.HeaderBuilder();
        const headConfig = header.genHeader();
        return this.httpService.post(common_urls_1.UserAPI.createUser, "", headConfig);
    }
    createUserTest() {
        this.userRepository.find().then(resp => console.log("afterfinde", resp));
        return "";
    }
    testUserAPI() {
        const header = new common_headerBuilder_1.HeaderBuilder();
        const headConfig = header.genHeader();
        const sendBody = header.genStringfyData(postData);
        return this.httpService
            .post(common_urls_1.UserAPI.updateUser, sendBody, headConfig)
            .pipe(operators_1.map(response => console.log("pip map", response.data)));
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [common_1.HttpService,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map