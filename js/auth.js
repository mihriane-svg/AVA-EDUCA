import {listagemUsuarios} from '../listagem-usuarios.js';

export function login(email, senha){
    return new Promise((resolve, reject) => {
        const usuarioEncontrado = listagemUsuarios.find(
            user => user.email === email && user.senha === senha
        );

        if (usuarioEncontrado){
            resolve(usuarioEncontrado);
        }else {
            reject("Dados incorretos. Favor verificar e tentar novamente");
        }
    });
}