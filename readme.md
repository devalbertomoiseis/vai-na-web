<h1 align="center"> Vai Na Web - Front End </h1><br/>

<h2>⚡ Tecnologias:</h2><br/>
<p>
  Tecnologias usadas no projeto do formulário.
</p>

![Html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<br/><hr>

<h2>HTML (HyperText Markup Language)<h2><br/>

<p>
  HTML é a linguagem de marcação utilizada na construção e estruturação de páginas web. Ele utiliza uma série de tags para definir elementos na página, como títulos, parágrafos, links, imagens, entre outros. As tags são cercadas por colchetes angulares e fornecem instruções ao navegador sobre como exibir o conteúdo.
</p>

```
  <p>Isto é um parágrafo</p>
  <a href="https://www.exemplo.com">Link para Exemplo</a>
```

<br/><hr>

<h2>CSS (Cascading Style Sheets):<h2><br/>

<p>
  CSS é uma linguagem de estilo que permite controlar a apresentação visual de uma página HTML. Ele define o layout, as cores, as fontes e outros aspectos visuais da página. As regras CSS são aplicadas a elementos HTML usando seletores.
</p>

```
p {
  color: blue;
  font-size: 16px;
}
```

<br/><hr>

<h2>JavaScript:<h2><br/>
<p>
  JavaScript é uma linguagem de programação usada para criar interatividade em páginas web. Ela permite manipular o conteúdo da página, responder a eventos do usuário e interagir com o servidor. JavaScript é frequentemente usado em conjunto com HTML e CSS para criar páginas dinâmicas.
</p><br/>

** document.getElementById e .value ** <br/>

<p>
document.getElementById é um método JavaScript que recupera um elemento HTML pelo seu ID. .value é uma propriedade que obtém ou define o valor de um elemento, como um campo de entrada de texto.
</p>

```
<input type="text" id="meuInput" />
<script>
  var inputElement = document.getElementById("meuInput");
  var valorDoInput = inputElement.value;
</script>
```

<br/><hr>

<h2>if, else, função:<h2><br/>
<p>
  if e else são estruturas de controle de fluxo em JavaScript. Eles permitem que você execute diferentes blocos de código com base em condições. Funções são blocos de código reutilizáveis que podem ser definidos e chamados em vários lugares do código.
</p>


```
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("Número positivo");
  } else {
    console.log("Número não positivo");
  }
}
```
<br/><hr>

<h2>setTimeout:</h2><br/>

<p>
setTimeout é uma função em JavaScript que executa um bloco de código após um determinado intervalo de tempo especificado em milissegundos.
</p>

```
setTimeout(function() {
  console.log("Esta mensagem será exibida após 2000 milissegundos (2 segundos).");
}, 2000);

```
<br/><hr>


<h2>Função validateEmail:</h2><br/>

<p>
A função validateEmail usa uma expressão regular (regex) simples para verificar se uma string representa um endereço de e-mail válido. A regex verifica se a string contém um ou mais caracteres não brancos (\S+), seguidos pelo símbolo '@', mais caracteres não brancos, um ponto, e mais caracteres não brancos.
</p>

```
var resultado = validateEmail("exemplo@email.com");
console.log(resultado);  // Retorna true se o email for válido, false caso contrário.

```
<br/><hr>