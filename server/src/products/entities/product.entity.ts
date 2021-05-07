import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        nullable:false
    })
    name:string

    @Column({
        nullable:false
    })
    image:string

    @Column({
        nullable:false
    })
    description:string

    @Column({
        nullable:false
    })
    news:boolean

    @Column({
        nullable:false
    })
    services:boolean
}