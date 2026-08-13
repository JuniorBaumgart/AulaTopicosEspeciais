import { Request, Response } from "express";

export function buscarPorCpf(
  request: Request<{ cpf: string }>,
  response: Response,
): void {
  const { cpf } = request.params;

  response.status(200).json({
    nome: "Junior de Souza",
    cpf: cpf,
    contasPrestadas: [
      {
        id: 1,
        nomeGasto: "lunch",
        data: "2026-04-28",
        valor: 998.99,
        status: "REJECTED",
      },
    ],
  });
}
