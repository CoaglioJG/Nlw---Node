import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {compare} from "bcryptjs";
import {sign} from  "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        //vai procurar se o email existe no banco de dados
        const userExists = await usersRepositories.findOne({
            email
        });
        //se o email n existir, joga essa msg
        if(!userExists){
            throw new Error("Email/Password incorrect") 
        }

        const passwordMatch = await compare(password, userExists.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect") 
        }

        const token = sign({
            email: userExists.email
        },"466ff99d211a652f741fcca9d3d851f3", {
            subject: userExists.id,
            expiresIn:"1d"
        });
        
        return token;
    }
}

export {AuthenticateUserService}