import { Request, Response } from "express";
import { DadosFuncionarios } from "../types/funcionarios";
import { criarFuncionario, listarTodosFuncionarios, listarFuncionarioPorId, atualizaFuncionario, deletaFuncionario } from "../services/funcionariosService";

interface ParametrosId {
  id: String;
}

export function criarNovoFuncionario(
  requisicao: Request<Object, Object, DadosFuncionarios>,
  resposta: Response,    
){
  const dadosFuncionarios = requisicao.body;
  console.log(dadosFuncionarios);
  const retorno = criarFuncionario(dadosFuncionarios);
  console.log("DADOS RETORNADOS: ", retorno);
  resposta.status(201).json(retorno);
}

export function listarFuncionarios(
  requisicao: Request<Object, Object, Object>,
  resposta: Response,    
){
    const funcionarios = listarTodosFuncionarios();
    resposta.status(200).json(funcionarios);
}

export function funcionarioPorId(
  requisicao: Request<ParametrosId, Object>,
  resposta: Response,
) {
    const funcionario = listarFuncionarioPorId(requisicao.params.id);
    resposta.status(200).json(funcionario);
}

export function atualizarFuncionario(
    requisicao: Request<ParametrosId, Object, DadosFuncionarios>,
    resposta: Response,
){
    const funcionario = atualizaFuncionario(requisicao.params.id, requisicao.body);
    
    if (funcionario){
        resposta.status(200).json(funcionario);
    }
    
    resposta.status(500).json({message: "Erro ao atualizar cadastro"});
}

export function deletarFuncionario(
    requisicao: Request<ParametrosId, Object, DadosFuncionarios>,
    resposta: Response,
){
    const funcionario = deletaFuncionario(requisicao.params.id);  
    if (funcionario) {
        resposta.status(204).json();
        return;
    }

    resposta.status(500).json();
}
