import { Request,Response } from "express";
import { ConsultaContas, DadosContaReceber } from "../types/prestacaoConta";
import { criarConta, listarContas } from "../services/contasReceberService";

export function criar(requisicao:Request<Object,Object, DadosContaReceber>,
    resposta:Response) {

    const prestacaoConta = requisicao.body;
    console.log(prestacaoConta);
    const retorno = criarConta(prestacaoConta);
    
    resposta.status(201).json(retorno);
}

export function listar (requisicao:Request<Object,Object,Object, ConsultaContas>,
    resposta:Response) {
    
    const { empresa, status }= requisicao.query;
    const contas = listarContas(empresa, status);

    resposta.status(200).json(contas);
}