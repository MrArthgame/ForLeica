import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        nullable:true
    })
    name:string;

    @Column({
        nullable:true
    })
    login:string;

    @Column({
        nullable:true
    })
    password:string;
}
