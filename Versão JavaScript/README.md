<h2 align="center">
  Trabalho Validação Formulário
 </h2>

 - Live Preview
    - https://forms.galhardoo.com

 - Como Rodar o Programa
    - Eu programei usando a última versão do Chrome, não testei em outros browsers
    - Basta executar o arquivo index.html, na versão JavaScript
    - Na versão PHP, precisaria configurar o MySQL e rodar em um servidor local.
    - Se quiser mecher no código simples JavaScript, use o "$ npm install" e depois digite "$ npm start" para começar o lite-server e atualizar o browser automaticamente a cada mudança de código.
    
 - Versão JavaScript
    - Valida os campos do formulário quando o usuário clicar no botão "Verificar Dados com JavaScript" no final da página, mostrando os dados preenchidos e não preenchidos.
    - Se os campos estiverem incorretos, vai ser avisado com uma mensagem em vermelho em cima do campo que estiver incorreto.
    - Foi utilizado o módulo global "lite-server" do NPM para atualizar o browser automaticamente enquanto eu desenvolvia.
    - Eu optei por usar o JavaScript puro mesmo, por questões auto didáticas e para aprender na "unha" mesmo.
    - Algumas partes do código não esta o mais otimizado possivel, como o uso de variáveis por exemplo, porque eu quis entender os fundamentos da linguagem, escrevendo do jeito mais "verboso" mesmo.

 - Versão PHP
    - Eu fiz a versão em PHP como projeto pessoal, para aprender o básico de CRUD com a linguagem.
    - O botão "Cadastrar Dados Com PHP" cadastra os dados do formulário em um Banco de dados MySQL, usando PDO e POO.