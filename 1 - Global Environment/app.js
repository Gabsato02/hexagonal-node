/*

Ao iniciar uma aplicação JavaScript, um Execution Context global é criado
e pode ser acessado através da variável this.

Global = fora de uma Função.

Esse contexto, em aplicações que rodam nos navegadores, recebe o valor do objeto Window,
que é a janela do navegador onde o código é executado. Pode ser acessado também pela
variável window.
*/

var a = 'Hello World!';

function b() {

}

/*

Variáveis e funções que estão fora de funções, são anexadas ao contexto global, portanto
é possível acessá-las através do objeto global this ou window.

*/

console.log(this, this.a, this.b);