import { ContaReceber, DadosContaReceber } from "../types/prestacaoConta";

let contas: ContaReceber[] = [
  {
    id: 1,
    empresa: "automasul",
    descricao: "lerolero",
    data: "2026-08-04",
    valor: 23,
    notaFiscalBase64: "SAJLDFHKJDAS",
    status: "PENDENTE",
  },
];

let proximoId = 2;

export function listarContas(empresa?: string, status?: string) {
  let resultado = contas;

  if (empresa) {
    resultado = resultado.filter((conta) =>
      conta.empresa.includes(empresa.toLowerCase()),
    );
  }

  if (status) {
    resultado = resultado.filter((conta) => conta.status == status);
  }

  return resultado;
}

export function criarConta(dados: DadosContaReceber) {
  console.log(dados);
  const novaConta: ContaReceber = {
    id: proximoId,
    ...dados,
    status: "PENDENTE",
  };

  proximoId += 1;
  contas.push(novaConta);
  return novaConta;
}

export function atualizarConta(
  id: String,
  body: DadosContaReceber,
): String | null {
  const idEmNumero = Number(id);

  if (isNaN(idEmNumero)) {
    return null;
  }

  contas = contas.map((conta) => {
    if (idEmNumero !== conta.id) {
      return conta;
    }
    conta.empresa = body.empresa;
    conta.descricao = body.descricao;
    conta.data = body.data;
    conta.valor = body.valor;
    conta.notaFiscalBase64 = body.notaFiscalBase64;

    return conta;
  });

  return id;
}

export function deletarConta(id: String): boolean {
  const idEmNumero = Number(id);

  var booleano = false;
  if (isNaN(idEmNumero)) {
    return booleano;
  }

  contas = contas.filter((conta) => {
    if (conta.id == idEmNumero) {
      booleano = true;
    }
  });

  //maneira alternativa sem passar o "contas =" no começo
  //contas.splice(0,idEmNumero);
  //contas.filter((conta) =>{
  //  if (conta.id == idEmNumero){
  //    contas.splice(0,idEmNumero);
  //    booleano= true;
  //  }
  //});

  return booleano;
}
