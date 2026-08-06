import { ContaReceber, DadosContaReceber } from "../types/prestacaoConta";

const contas:ContaReceber[] = [
    {
        id:1,
        empresa:"automasul",
        descricao: "lerolero",
        data: "2026-08-04",
        valor: 23,
        notaFiscalBase64:"SAJLDFHKJDAS",
        status:"PENDENTE"
    }
];

let proximoId = 2;

export function listarContas(empresa?:string, status?:string){
  let resultado = contas;
  console.log("oi to passando em listarContas");

  if(empresa) {
    resultado = resultado.filter((conta)=>conta.empresa
    .includes(empresa.toLowerCase()));
  }
  
  if(status) {
    resultado = resultado.filter((conta)=>conta.status == status);
  }

  return resultado
}

export function criarConta(dados: DadosContaReceber){
    console.log(dados)
    const novaConta:ContaReceber = {
        id: proximoId,
        ...dados,
        status: "PENDENTE"
    }

    proximoId += 1;
    contas.push(novaConta);
    return novaConta
}