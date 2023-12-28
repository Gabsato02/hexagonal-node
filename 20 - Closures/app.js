function greet(whatToSay) {
	return function (name) {
		console.log(`${whatToSay} ${name}`);
	};
}

var sayHello = greet('Hello');

sayHello('Gabriel');

/*

No exemplo acima, a função greet é criada e, ao ser executada, possui seu
contexto de execução.

Esse contexto recebe o parâmetro whatToSay, e retorna uma função anônima.

Essa função anônima é atribuída a variável sayHello.

Contudo, ao executar a função, agora presente em sayHello, o valor de whatToSay
ainda existe, mesmo que seu contexto de execução original já tenha finalizado.

Isso acontece por causa do conceito de Closure.

Closure refere-se ao fato de que, na criação de uma função, tudo que circunda a
função (seu contexto léxico), é encapsulado e tem acesso garantido na função criada.

*/

function buildFunctions() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		/*
			let j = i;

			A linha acima retornaria o comportamento esperado, pois a cada
			iteração do loop, j estaria em um contexto léxico diferente, portanto
			receberia o valor de i naquele momento específico
		*/
		arr.push(
			function () {
				console.log(i); // console.log(j)
			}

			/*
				Outra opção seria usar uma IIFE no lugar da função acima, pois
				cada função teria seu próprio contexto de exexcução, sem ser afetada
				pelo de fora

				(function($i) {
					return function() {
						console.log($i);
					}
				}(i))
			*/
		);
	}

	return arr;
	/* No momento de retorno, o que existe no contexto léxico 
	das funções criadas, é que i === 3 e arr === [f0, f1, f2]	
	*/
}

var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
