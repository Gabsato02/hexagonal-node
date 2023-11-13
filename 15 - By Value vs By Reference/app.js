/*

Cópia por valor (tipos primitivos)

Na cópia por valor, os valores são iguais, mas ocupam espaços diferentes na memória.
Portanto, ao alterar uma das cópias, as outras não são afetadas.

*/

var a = 3;
var b;

b = a;
a = 2;

console.log(a, b);

/*

Cópia por referência (objetos, funções)

Na cópia por referência, é feito um apontamento para o local da memória da variável original.
Ao alterar uma das cópias, todas serão afetadas.

*/

var c = { greeting: 'Hi!' };
var d;

d = c;
c.greeting = 'Hello!';

console.log(c, d);

// O operador '=' seta um novo espaço de memória

c = { greeting: 'Hola!' };

console.log(c, d);