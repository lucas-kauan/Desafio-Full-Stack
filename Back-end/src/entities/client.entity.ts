import { hash, hashSync } from "bcryptjs"
import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate, BeforeInsert, OneToMany, CreateDateColumn } from "typeorm"
import { Contacts } from "./contacts.entity"

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column()
    telephone: string

    @CreateDateColumn()
    createdAt: Date

    @Column({ default: true })
    isActive: boolean

    @Column({ default: false })
    isAdmin: boolean

    @OneToMany(() => Contacts, (contacts) => contacts.client)
    contacts: Contacts[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }

}