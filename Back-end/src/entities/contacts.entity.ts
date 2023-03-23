import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm"
import { Client } from "./client.entity"

@Entity("contacts_user")
export class Contacts {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    telephone: string

    @CreateDateColumn()
    createdAt: Date

    @Column({ default: true })
    isActive: boolean

    @ManyToOne(() => Client, (client) => client.contacts, { eager: true })
    client: Client
}