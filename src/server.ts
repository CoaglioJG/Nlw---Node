import express from "express";
import "reflect-metadata";

//quando o nome do arquivo da pasta se chama index, não é preciso dizer no import
import "./database";

const app = express();


// 3000 é a porta q irá rodar o projeto
app.listen(3000, () => console.log("Server is running"));