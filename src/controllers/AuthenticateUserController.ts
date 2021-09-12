import {Request, Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {

    async handle(request:Request, response:Response){
        const {email,password} = request.body

        const authenticated = new AuthenticateUserService();

        const token =  await authenticated.execute({
            email,
            password
        });

        return response.json(token);
    }
}

export { AuthenticateUserController } 