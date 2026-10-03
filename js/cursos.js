import { cursos } from '../dados/listagem-cursos.js';

export function listarCursos(emailUsuario) {
    return new Promise((resolve, reject) => {
        const cursosDoUsuario = cursos.filter(curso => curso.emailProfessor === emailUsuario);

        if (cursosDoUsuario.length > 0){
            resolve(cursosDoUsuario);
        } else {
            reject("Não há cursos cadastrados para esse usuário");
        }
    });
}