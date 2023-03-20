<!DOCTYPE html>
<html>
  <head>
    <title>README - Sara.com.br - Criação de Lembretes para Medicamentos</title>
  </head>
  <body>
    <h1>Sara.com.br - Criação de Lembretes para Medicamentos</h1>
    <p>Este é um teste automatizado que utiliza o framework Cypress para criar lembretes para medicamentos na aplicação Sara.com.br. O teste foi criado com o objetivo de validar a funcionalidade de criação de lembretes na plataforma.</p>
    <h2>Como executar o teste</h2>
    <p>Para executar o teste, basta ter o Cypress instalado e seguir os seguintes passos:</p>
    <ol>
      <li>Clone este repositório em sua máquina;</li>
      <li>Abra um terminal na pasta raiz do projeto;</li>
      <li>Execute o comando "npm install" para instalar as dependências;</li>
      <li>Execute o comando "npm run test" para executar o teste.</li>
    </ol>
    <h2>Estrutura do teste</h2>
    <p>O teste consiste em criar lembretes para uma lista de medicamentos previamente definidos. Para cada medicamento da lista, o teste executa os seguintes passos:</p>
    <ol>
      <li>Visita a página da aplicação Sara.com.br;</li>
      <li>Clica no botão "continuar" para aceitar os termos e condições;</li>
      <li>Digita um número de telefone válido e clica no botão "continuar/acessar";</li>
      <li>Digita um token válido e valida o login através do nome de usuário;</li>
      <li>Clica no botão de criação de lembretes;</li>
      <li>Seleciona o medicamento na lista;</li>
      <li>Define a duração do lembrete;</li>
      <li>Define a frequência de ingestão do medicamento;</li>
      <li>Valida se o medicamento foi adicionado corretamente na lista de lembretes;</li>
      <li>Limpa os cookies e o local storage para iniciar o processo novamente com o próximo medicamento da lista.</li>
    </ol>
    <h2>Resultado esperado</h2>
    <p>Ao final da execução do teste, é esperado que todos os lembretes para os medicamentos da lista tenham sido criados com sucesso. Caso algum passo do teste falhe, o Cypress irá mostrar uma mensagem de erro indicando qual foi o problema encontrado.</p>
  </body>
</html>


![Imagem do WhatsApp de 2023-03-20 à(s) 15 19 39](https://user-images.githubusercontent.com/124794606/226431505-33c59363-3707-4390-885f-d449a03b3b9f.jpg)
