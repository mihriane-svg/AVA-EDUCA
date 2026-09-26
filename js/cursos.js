import {listagemCursos} from './listagem-cursos.js';

export function listarCursos(usuario) {
    return new Promise((resolve, reject) => {
        const cursosDoUsuario = listagemCursos.filter(curso => curso.nomeUsuario === usuario);

        if (cursosDoUsuario.length > 0){
            resolve(cursosDoUsuario);
        } else {
            reject("Não há cursos cadastrados para esse usuário");
        }
    });
}