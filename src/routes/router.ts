import { Router } from "express";
import { helloControler } from "../controllers/helloController";
import { buscarPorCpf } from "../controllers/usuariosController";
import {
  listar,
  criar,
  atualizar,
  deletar,
} from "../controllers/prestacaoContasController";
import { validarDadosConta } from "../middlewares/validarCorpo";

export const rotas = Router();

//rotas.get("/", helloControler);
rotas.get("/contas", listar);
rotas.post("/", validarDadosConta, criar);
rotas.put("/:id", atualizar);
rotas.delete("/deletar/:id", deletar);
rotas.get("/buscar-por-cpf/:cpf", buscarPorCpf);
rotas.post("/envia-conta", criar);
