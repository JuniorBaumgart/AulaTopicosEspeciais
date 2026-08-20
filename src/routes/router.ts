import { Router } from "express";
import { helloControler } from "../controllers/helloController";
import { buscarPorCpf } from "../controllers/usuariosController";
import {
  listar,
  criar,
  atualizar,
  deletar,
} from "../controllers/prestacaoContasController";
import { criarNovoFuncionario, listarFuncionarios, funcionarioPorId, atualizarFuncionario, deletarFuncionario } from "../controllers/funcionariosController";
import { validarDadosConta, validarDadosFuncionario } from "../middlewares/validarCorpo";

export const rotas = Router();

//rotas.get("/", helloControler);
rotas.get("/contas", listar);
rotas.post("/", validarDadosConta, criar);
rotas.put("/:id", atualizar);
rotas.delete("/deletar/:id", deletar);
rotas.get("/buscar-por-cpf/:cpf", buscarPorCpf);
rotas.post("/envia-conta", criar);

// Rotas Funcionarios
rotas.get("/funcionarios", listarFuncionarios);
rotas.get("/funcionarios/:id", funcionarioPorId);
rotas.post("/funcionarios", validarDadosFuncionario, criarNovoFuncionario);
rotas.put('/funcionarios/:id', validarDadosFuncionario, atualizarFuncionario);
rotas.delete("/funcionarios/:id", deletarFuncionario);
