/*
    Para ficar fera em React !

    Sintaxe básica do JavaScript:
    Variáveis, tipos de dados, operadores.
    Estruturas de controle de fluxo: if, else, switch, while, for.
    Funções e escopo.
    
    Manipulação de Arrays e Objetos:

    Trabalhar com arrays (métodos como map, filter, reduce).
    Trabalhar com objetos e entender a notação de ponto e colchetes.
    
    Funções e Closures:
    Entender como criar funções e lidar com parâmetros e retornos.
    Compreender closures e escopo léxico.

    Promises e Assíncrono:
    Trabalhar com assincronia em JavaScript.
    Compreender Promises e o uso de async/await.

    Manipulação do DOM:
    Interagir com o Document Object Model (DOM) usando JavaScript.
    Manipular elementos HTML, eventos e ouvir eventos do usuário.

    ES6+ (ECMAScript 2015+):
    Familiaridade com recursos introduzidos no ES6, como let e const, arrow functions, classes, módulos, e desestruturação.

    Trabalhar com APIs:
    Fazer requisições HTTP usando fetch ou outras bibliotecas (Ajax, Axios).
    Compreender o formato JSON e como manipulá-lo.

    Conceitos de Orientação a Objetos (OOP):
    Entender como funciona a programação orientada a objetos em JavaScript.

    Manipulação de Eventos:
    Trabalhar com eventos e manipulação de eventos do DOM.

*/

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let area = document.getElementById("area").value;
  let phone = document.getElementById("phone").value;

  let errorMessage = "";

  if (name === "") {
    errorMessage += "Nome não pode estar vazio.<br>";
  }

  if (email === "") {
    errorMessage += "Email não pode estar vazio.<br>";
  } else if (!validateEmail(email)) {
    errorMessage += "Formato de email inválido.<br>";
  }

  if (area === "") {
    errorMessage += "Área não pode estar vazia.<br>";
  }

  if (phone === "") {
    errorMessage += "Telefone não pode estar vazio.<br>";
  }

  var errorMessageDiv = document.getElementById("error-message");
  errorMessageDiv.innerHTML = errorMessage;

  if (errorMessage !== "") {
    // Exibir mensagens de erro por 3 segundos
    setTimeout(function () {
      errorMessageDiv.innerHTML = "";
    }, 3000);
  } else {
    // Simular o envio do formulário (pode ser substituído por uma requisição AJAX) Jquery/Ajax
    alert("Formulário enviado com sucesso!");

    // Reiniciar o formulário
    document.getElementById("myForm").reset();
  }
}

function validateEmail(email) {
  // Regex simples para validar o formato do email
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
