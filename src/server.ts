import express from "express";
import "reflect-metadata";
import {router} from "./routes";

//quando o nome do arquivo da pasta se chama index, não é preciso dizer no import
import "./database";

const app = express();

app.use(express.json());// para especificar qual é o tipo de arquivo q vai enviar

app.use(router);// todas as rotas farão parte do projeto

// 3000 é a porta q irá rodar o projeto
app.listen(3000, () => console.log("Server is running"));