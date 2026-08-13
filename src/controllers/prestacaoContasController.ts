import { Request, Response } from "express";
import { ConsultaContas, DadosContaReceber } from "../types/prestacaoConta";
import {
  criarConta,
  listarContas,
  atualizarConta,
  deletarConta,
} from "../services/contasReceberService";

interface ParametrosId {
  id: String;
}

export function criar(
  requisicao: Request<Object, Object, DadosContaReceber>,
  resposta: Response,
) {
  const prestacaoConta = requisicao.body;
  console.log(prestacaoConta);
  const retorno = criarConta(prestacaoConta);

  resposta.status(201).json(retorno);
}

export function listar(
  requisicao: Request<Object, Object, Object, ConsultaContas>,
  resposta: Response,
) {
  const { empresa, status } = requisicao.query;
  const contas = listarContas(empresa, status);

  resposta.status(200).json(contas);
}

export function atualizar(
  requisicao: Request<ParametrosId, Object, DadosContaReceber>,
  resposta: Response,
) {
  const conta = atualizarConta(requisicao.params.id, requisicao.body);

  if (conta) {
    resposta.status(200).json({ mensagem: "Sucesso" });
    return;
  }

  resposta.status(500).json({ mensage: "Erro ao atualizar" });
}

export function deletar(
  requisicao: Request<ParametrosId, Object, DadosContaReceber>,
  resposta: Response,
) {
  const conta = deletarConta(requisicao.params.id);

  if (conta) {
    resposta.status(200).json({ mensagem: "Sucesso ao deletar" });
    return;
  }

  resposta.status(500).json({ mensage: "Erro ao atualizar" });
}
