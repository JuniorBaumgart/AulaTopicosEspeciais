import { DadosFuncionarios, Funcionario } from "../types/funcionarios";

let funcionarios: Funcionario[] = []

let proximoId = 1;

export function criarFuncionario(dados: DadosFuncionarios) {
    console.log(dados);
    const novoFuncionario: Funcionario = {
        id: proximoId,
        ...dados,
        ativo: true,
    }

    proximoId += 1;
    funcionarios.push(novoFuncionario);
    return novoFuncionario
}

export function listarTodosFuncionarios(){
    let resultado = funcionarios;
    return resultado
}

export function listarFuncionarioPorId(id: String) {
    const idEmNumero = Number(id);
    if (isNaN(idEmNumero)) {
        return null;
    }

    let funcionario = funcionarios.map((funcionario) => {
        if (idEmNumero == funcionario.id) {
            return funcionario;
        } 
    });

    return funcionario;
}

export function atualizaFuncionario(
    id: String,
    body: DadosFuncionarios,
){
    const idEmNumero = Number(id);
    if (isNaN(idEmNumero)) {
        return null;
    }

    let funcionario = funcionarios.map((funcionario) => {
        if (idEmNumero !== funcionario.id) {
            return funcionario;
        }
        funcionario.nome = body.nome,
        funcionario.cpf = body.cpf,
        funcionario.email = body.email,
        funcionario.cargo = body.cargo,
        funcionario.departamento = body.departamento,
        funcionario.ativo = body.ativo

        return funcionario
    });

    return funcionario;

}

export function deletaFuncionario(id:String){  
    const idEmNumero = Number(id);
    
    var booleano = false;
    if (isNaN(idEmNumero)) {
        return booleano;
    }

    funcionarios = funcionarios.filter((funcionario) => {
        if (funcionario.id === idEmNumero) {
            funcionarios.splice(0,idEmNumero);
            booleano = true
        }
    });

    return booleano;
}