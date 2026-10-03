import { listarCursos } from '../js/cursos.js';

document.addEventListener("DOMContentLoaded", async () => {
    const dadoUsuario = sessionStorage.getItem("usuarioLogado");
    
    if(!dadoUsuario){
        alert("Nenhum usuário logado. Redirecionando...");
        window.location.href = "../login/login.html";
        return;
    }

    const usuarioObj = JSON.parse(dadoUsuario);
    const usuarioLogado = usuarioObj.email; 

    const containerUsuario = document.getElementById("usuario-logado");
    if(containerUsuario){
        containerUsuario.textContent = `Usuário: ${usuarioObj.nome}`;
    }

    const containerCursos = document.getElementById("lista-cursos");

    try {
        
        const cursos = await listarCursos(usuarioLogado);

        containerCursos.innerHTML = "";

        //Cria um card para cada curso
        cursos.forEach(curso => {
            const card = document.createElement("div");
            card.classList.add("curso-card");

            card.innerHTML = `
                <h3>${curso.nomeCurso}</h3>
                <p><strong>Início:</strong> ${curso.dataInicio}</p>
                <p><strong>Fim:</strong> ${curso.dataFim}</p>
            `;

            containerCursos.appendChild(card);
        });

    } catch (erro) {
        containerCursos.innerHTML = `<p>Erro ao carregar cursos: ${erro}</p>`;
        console.error(erro);
    }

    //logout
const btnSair = document.getElementById('btn-sair');

if (btnSair) {
    btnSair.addEventListener('click', () => {
        
        sessionStorage.removeItem('usuarioLogado');
        
        
        window.location.href = '../login/login.html';
    });
}
});
