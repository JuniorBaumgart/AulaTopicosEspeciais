import { DadosContaReceber } from "../types/prestacaoConta";
import { NextFunction, Request, Response } from "express";

export function validarDadosConta(equisicao:Request<Object,Object, DadosContaReceber>,
    resposta:Response, proximo:NextFunction){
    

    console.log("Passei aqui!");
    proximo();        
    
}