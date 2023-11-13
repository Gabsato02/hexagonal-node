greet();

function greet() { // Statement - pois é apenas a execução de um trabalho
  console.log('hi');
}

/*

anonymousGreet(); // anonymousGreet is not a function

Se essa função for executada aqui, resultará em um erro. Pois anonymousGreet é uma variável,
ou seja, ela tem seu espaço alocado na fase de Hoisting, mas ainda não teve seu valor
atribuído, pois isso acontece na fase de Execução.

Essa regra vale para todas as expressões que são atribuídas a variáveis.

*/

var anonymousGreet = function () { // Expression - pois é uma atribuição de valor
  console.log('hi');
} // Essa função é anônima, pois seu atributo Nome é inexistente

anonymousGreet(); 