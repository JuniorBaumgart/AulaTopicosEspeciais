import { DadosContaReceber } from "../types/prestacaoConta";
import { NextFunction, Request, Response } from "express";

export function validarDadosConta(
  requisicao: Request<Object, Object, DadosContaReceber>,
  resposta: Response,
  proximo: NextFunction,
) {
  console.log(requisicao.body);
  console.log("Passei aqui!");
  proximo();
}
