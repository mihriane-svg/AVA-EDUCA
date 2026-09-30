import {cadastrarAluno} from "./alunos.js";

document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('form-cadastro-aluno');
    const inputCep = document.getElementById('cep');

    if(inputCep){
        inputCep.addEventListener('blur', (e) => {
           const cep = e.target.value.replace(/\D/g, ''); //remove caracteres não numéricos

           if(cep.length === 8){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro){
                        document.getElementById('logradouro').value = data.logradouro || '';
                        document.getElementById('bairro').value = data.bairro || '';
                        document.getElementById('cidade').value = data.cidade || '';
                        document.getElementById('estado').value = data.estado || '';
                    } else{
                        alert('CEP não encontrado.');
                    }
                })
                .catch(error => console.error('Erro ao buscar o CEP:', error));
           }
        });
    }

    if(formCadastro){ //envio do formulário de cadastro
        formCadastro.addEventListener('submit', async (e) => {
            formCadastro.addEventListener('submit', async (e) => {
                e.preventDefault();

                //captura os valores dos campos
                const nome = document.getElementById('nome').value.trim();
                const genero = document.getElementById('genero').value.trim();
                const dataNascimentoStr = document.getElementById('dataNascimentoStr').value.trim();
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
                
                
                if(nome.length < 4 || nome.length > 80){
                    alert('O nome completo deve ter entre 4 e 80 caracteres.');
                    return;
                }

                //validação da data de nascimento usando Moment.js
                const dataNasc = moment(dataNascimentoStr);
                const dataMinima = moment('1990-01-01');
                const dataAtual = moment();

                if(!dataNasc.isValid() || dataNasc.isBefore(dataMinima) || dataNasc.isAfter(dataAtual)){
                    alert('A data de nascimento deve ser maior que 01/01/1990 e menor que a data atual');
                    return;
                }
                //criação do objeto Aluno
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

                //chamada da função cadastrarAluno
                try{
                    const mensagem = await cadastrarAluno(novoAluno);
                    alert(mensagem); //mensagem de "Aluno cadastrado com sucesso"
                    formCadastro.reset();
                } catch (erro) {
                    alert(erro);
                }
            });
        });
    }
});