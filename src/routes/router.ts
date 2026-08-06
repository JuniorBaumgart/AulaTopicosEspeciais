import { Router } from "express";
import { helloControler } from "../controllers/helloController";
import { buscarPorCpf } from "../controllers/usuariosController";
import { listar, criar } from "../controllers/prestacaoContasController";
import { validarDadosConta } from "../middlewares/validarCorpo";

export const rotas = Router();

//rotas.get("/", helloControler);
rotas.get("/contas", listar);
rotas.get("/buscar-por-cpf/:cpf", buscarPorCpf);
rotas.post("/", validarDadosConta, criar);
rotas.post("/envia-conta", criar);
