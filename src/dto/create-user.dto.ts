import { IsString, IsInt } from "class-validator"

export class CreateUserDto {
  @IsString() readonly accid: string
  @IsString() readonly name: string
  @IsString() readonly icon: string
  @IsString() readonly sign: string
  @IsString() readonly email: string
  @IsString() readonly birth: string
  @IsString() readonly mobile: string
  @IsInt() readonly gender: number
  @IsString() readonly ex: string
}
