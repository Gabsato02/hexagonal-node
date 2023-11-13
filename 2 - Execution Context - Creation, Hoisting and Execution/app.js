function b() {
	console.log('Function B');
}

b();

console.log(a);

var a = 'Hello World!';

console.log(a);

/* 
O que acontece no contexto de execução é separado em duas fases:

CRIAÇÃO: onde é criado o Global Object, a variável 'this' e o Outer Environment

HOISTING: quando o parser lê o código e identifica variáveis e funções, e aloca espaço
na memória para elas.

É por isso que, no código acima, o primeiro console da variável A vai exibir um 'undefined',
pois já possui espaço de memória alocado na fase de criação, mesmo que não tenha sido inicializada.

Funções, por sua vez, são alocadas na memória por inteiro.

Já o segundo console vai exibir 'Hello World', pois essa foi a atribuição de valor na fase de
execução.
*/
