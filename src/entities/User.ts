import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("users") // nome da tabela que faz referencia
 class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()// caso o nome na tabela seja diferente, doq irá utilizar, coloque o nome da tabela dentro do parenteses.
     name: string;

    @Column()
     email: string;

    @Column()
     admin: boolean;

     @Column()
     password: string;

    @CreateDateColumn()
     created_at:Date;

    @UpdateDateColumn()
     updated_at:Date;

     constructor(){
        if(!this.id){
            this.id=uuid();
        }
     }

}

export {User};
