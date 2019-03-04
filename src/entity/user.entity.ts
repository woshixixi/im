import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number

  @Column() accid: string

  @Column() password: string

  @Column() name: string

  @Column() icon: string

  @Column() email: string

  @Column() mobile: string

  @Column() gender: number

  @Column() compony: string

  @Column() department: string

  @Column() role: string

  @Column() is_deleted: string

  @Column() deleted_at: string

  @Column() created_at: string
}
