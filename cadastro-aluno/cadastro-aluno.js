import { cadastrarAluno } from "../js/alunos.js";

document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('form-cadastro-aluno');
    const inputCep = document.getElementById('cep');

    console.log("Formulário encontrado:", formCadastro);

    if (inputCep) {
        inputCep.addEventListener('blur', (e) => {
            const cep = e.target.value.replace(/\D/g, '');

            if (cep.length === 8) {
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => response.json())
                    .then(data => {
                        if (!data.erro) {
                            document.getElementById('logradouro').value = data.logradouro || '';
                            document.getElementById('bairro').value = data.bairro || '';
                            document.getElementById('cidade').value = data.localidade || '';
                            document.getElementById('estado').value = data.uf || '';
                        } else {
                            alert('CEP não encontrado.');
                        }
                    })
                    .catch(error => console.error('Erro ao buscar o CEP:', error));
            }
        });
    }

        if (formCadastro) {
        formCadastro.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            e.stopPropagation();
            
            console.log("Botão salvar foi clicado e preventDefault acionado!");

            const nome = document.getElementById('nome').value.trim();
            const genero = document.getElementById('genero').value.trim();
            const dataNascimentoStr = document.getElementById('dataNascimento').value.trim();
            const cpf = document.getElementById('cpf').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const email = document.getElementById('email').value.trim();
            const cep = document.getElementById('cep').value.trim();
            const cidade = document.getElementById('cidade').value.trim();
            const estado = document.getElementById('estado').value.trim();
            const logradouro = document.getElementById('logradouro').value.trim();
            const numero = document.getElementById('numero').value.trim();
            const complemento = document.getElementById('complemento').value.trim();
            const bairro = document.getElementById('bairro').value.trim();        
            
            if (nome.length < 4 || nome.length > 80) {
                alert('O nome completo deve ter entre 4 e 80 caracteres.');
                return;
            }
            //Moment.js
            const dataNasc = moment(dataNascimentoStr);
            const dataMinima = moment('1990-01-01');
            const dataAtual = moment();

            if (!dataNasc.isValid() || dataNasc.isBefore(dataMinima) || dataNasc.isAfter(dataAtual)) {
                alert('A data de nascimento deve ser maior que 01/01/1990 e menor que a data atual');
                return;
            }

            const novoAluno = {
                nome: nome,
                genero: genero,
                dataNascimento: dataNasc.format('YYYY-MM-DD'),
                cpf: cpf,
                telefone: telefone,
                email: email,
                cep: cep,
                cidade: cidade,
                estado: estado,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                bairro: bairro
            };

            try {
                const mensagem = await cadastrarAluno(novoAluno);
                alert(mensagem);
                formCadastro.reset();
            } catch (erro) {
                alert(erro);
            }
        });
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