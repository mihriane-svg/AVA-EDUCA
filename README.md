# AVA-EDUCA+

## Descrição do Projeto
Aplicação web estática desenvolvida como projeto avaliativo. O sistema tem como objetivo centralizar as informações acadêmicas de uma instituição de ensino profissionalizante, facilitando o trabalho do corpo pedagógico no acompanhamento de cursos e dados dos alunos de forma integrada, responsiva e intuitiva.
O projeto se baseia em evitar dispersão de dados em planilhas e sistemas separados, unificando a gestão em uma única plataforma acessível tanto em computadores quanto em dispositivos móveis.

---

## Tecnologias e Técnicas Utilizadas
* **HTML5:** Estrutura semântica das páginas (`header`, `main`, `nav`, `section`, etc.).
* **CSS3:** Estilização geral, Flexbox para menus/cards e CSS Grid para o layout da Dashboard, além de Media Queries para total responsividade (mobile e desktop).
* **JavaScript (ES6+):** Lógica da aplicação, manipulação do DOM, tratamento de eventos, Arrow Functions, Promises e consumo de APIs.
* **Módulos ES6 (`import`/`export`):** Organização do código JavaScript em módulos estruturados.
* **Programação Orientada a Objetos (POO):** Utilização de classes (ex: classe `Aluno` com construtor).
* **APIs Externas e Bibliotecas via CDN:** 
  * Integração com a **API do ViaCEP** para preenchimento automático de endereços.
  * Utilização da biblioteca **Moment.js** para validação de datas no cadastro.
* **Armazenamento Local:** Uso de `sessionStorage` para gerenciar a sessão do usuário logado.

---

## Estrutura do Projeto

```text
ava-educa/
├── login/
│   ├── login.html
│   ├── login.js
│   └── login.css
├── dashboard/
│   ├── dashboard.html
│   ├── dashboard.js
│   └── dashboard.css
├── cadastro-aluno/
│   ├── cadastro-aluno.html
│   ├── cadastro-aluno.js
│   └── cadastro-aluno.css
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── cursos.js
│   ├── Aluno.js
│   └── alunos.js
├── dados/
│   ├── listagem-usuarios.js
│   ├── listagem-cursos.js
│   └── listagem-alunos.js
├── assets/
│   ├── images/
│   └── icons/
├── index.html
├── package.json
└── README.md

## Como Executar o Projeto
1. Clone o repositório para a sua máquina:
   ```bash
   git clone https://github.com/mihriane-svg/AVA-EDUCA.git

   Abra a pasta do projeto no seu editor de código.

Se utilizar o VS Code: 
Instale a extensão Live Server, clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

O sistema abrirá automaticamente a partir da tela de Login.