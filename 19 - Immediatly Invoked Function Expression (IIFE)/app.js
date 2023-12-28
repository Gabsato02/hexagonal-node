/*
Immediatly Invoked Function Expression (IIFE)

Uma Function Expression que é executada imediatamente após
sua criação.

Isso garante que o código seja executado dentro do contexto
de execução daquela função. Dessa forma, não há nenhuma 
possibilidade de conflito com código externo.

Se for necessário acessar o contexto global, este pode ser
passado via parâmetros.
*/
var firstname = 'Gabriel';

(function(name) {
	var greeting = 'Inside IIFE: Hello';
	console.log(`${greeting} ${name}`);
}(firstname));
