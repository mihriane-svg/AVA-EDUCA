import {alunos} from './listagem-alunos.js';

export function cadastrarAluno(aluno) {
    return new Promise((resolve, reject) => {
        try{
            aluno.id = 'ALU-' + Date.now();

            if(Array.isArray(alunos)){
                alunos.push(aluno);
                resolve("Aluno cadastrado com sucesso!");
            } else{
                reject("Erro ao cadastrar aluno");
            }
        } catch (error){
            reject("Erro ao cadastrar o aluno");
        }
    });
}