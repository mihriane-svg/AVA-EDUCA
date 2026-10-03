import {login} from '../js/auth.js';

document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.querySelector("#form-login");
    const inputEmail = document.getElementById("usuario");
    const inputSenha = document.getElementById("senha");
    const msgErro = document.getElementById("mensagem-erro");
    const btnMostrarSenha = document.getElementById("btnMostrarSenha");
    const linkEsqueciSenha = document.getElementById("esqueci-senha");

    if(btnMostrarSenha && inputSenha){
        btnMostrarSenha.addEventListener("click", () => {
            if(inputSenha.type === "password"){
                inputSenha.type = "text";
                btnMostrarSenha.textContent = "Ocultar";
            } else{
                inputSenha.type = "password";
                btnMostrarSenha.textContent = "Mostrar Senha";
            }
        });
    }

    if(linkEsqueciSenha){
        linkEsqueciSenha.addEventListener("click", (evento) => {
            evento.preventDefault();
            alert("Esta funcionalidade está em construção.");
        });
    }

    if(formLogin){
        formLogin.addEventListener("submit", async (evento) => {
            evento.preventDefault();

            const emailDigitado = inputEmail.value.trim();
            const senhaDigitada = inputSenha.value.trim();

            try{
                const usuarioLogado = await login(emailDigitado, senhaDigitada);

                if(usuarioLogado){
                    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
                    window.location.href = "../dashboard/dashboard.html"; //redireciona para a dasboard
                }
            } catch(erroMensagem){
                if(msgErro){
                    msgErro.textContent = erroMensagem;
                    msgErro.style.display = "block";
                } else{
                    alert(erroMensagem);
                }
            }
        });
    }
});