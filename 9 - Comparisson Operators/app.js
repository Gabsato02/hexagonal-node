console.log(3 < 2 < 1);

/*

No console acima, o operador usado é o '<'. Logo, não há diferença na precedência das operações.
Sendo assim, o JavaScript vai executar conforme a associação destes, que é da esquerda
para a direita (ver README).

Considerando que operadores são funções que retornam um valor, a primeira operação (3 < 2),
vai retornar o valor booleano 'false'. Sendo assim, a próxima operação será (false < 1).

Por se tratar de tipos diferentes, o JavaScript fará a coerção desses tipos, convertendo o 
valor 'false' para o tipo numérico, e isso resultará em 0. Portanto, a operação executada 
será 0 < 1, e isso retornará falso mesmo que, matematicamente, 3 < 2 < 1 seja verdadeiro.

EXEMPLOS DE COERÇÃO:
*/

console.log({
  'false == 0': false == 0,
  'null == 0': null == 0,
  'null < 1': null < 1,
  '"" == 0': "" == 0,
  '"" == false': "" == false,
});

var a = 0;
var b = false;

if (a == b) console.log('Valores iguais por coerção!');
if (a !== b) console.log('Valores diferentes por comparação de tipo.');