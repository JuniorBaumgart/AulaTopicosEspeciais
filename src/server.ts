import express, { Router } from "express";
import { rotas } from "./routes/router";

const app = express();
const port = 3000;

app.use(express.json());

app.get(("/health"),(request,response)=>{
    console.log('verificando status');
    response.status(200).json({message: "Sucesso"})
});

app.use(rotas);

app.listen(port, ()=>{
    console.log(`Port aquired : http://localhost:${port}`);
});

