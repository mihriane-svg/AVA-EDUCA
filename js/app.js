document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.querySelector("form");
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

    if (linkEsqueciSenha) {
        linkEsqueciSenha.addEventListener("click", (evento) => {
            evento.preventDefault(); // Evita que a página pule para o topo se for um link <a>
            alert("Funcionalidade em construção!");
        });
    }

    formLogin.addEventListener("submit", (evento) => {
        evento.preventDefault();
    
        const emailDigitado = inputEmail.value;
        const senhaDigitada = inputSenha.value;

        try {
            const usuarioLogado = login(emailDigitado, senhaDigitada);

            if(usuarioLogado){
                sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
                window.location.href = "dashboard.html";
            }
        } catch(erro){

            if(msgErro){
                msgErro.textContent = "E-mail ou senha inválidos. Tente novamente.";
                msgErro.style.display = "block";
            } else{
                alert("Dados inválidos!");
            }
        }
    })
});