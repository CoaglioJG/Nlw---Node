import express, {Request, Response, NextFunction, response} from "express";
import "express-async-errors";
import "reflect-metadata";
import {router} from "./routes";

//quando o nome do arquivo da pasta se chama index, não é preciso dizer no import
import "./database";

const app = express();

app.use(express.json());// para especificar qual é o tipo de arquivo q vai enviar

app.use(router);// todas as rotas farão parte do projeto

//Midleware de erro
app.use((err:Error, request:Request, response:Response, next:NextFunction)=>{
    if(err instanceof Error){ // TUDO QUE ESTIVER NO TRHOW NEW... CAI NESSE IF
        return response.status(400).json({
            error:err.message
        })
    }

    return response.status(500).json({status:"error", message:"Internal Server Error"});
})

// 3000 é a porta q irá rodar o projeto
app.listen(3000, () => console.log("Server is running"));