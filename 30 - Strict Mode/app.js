var person;
persom = {}; // Erro de sintaxe
console.log(person); // undefined
console.log(persom); // Object {}

function useStrict() {
	'use strict';

	var person2;
	persom2 = {};
	console.log(person2);
	console.log(persom2);
}

useStrict();
/*

"use strict" deve ser usado no topo do arquivo ou de uma função.

Serve para ativar um modo restrito de escrita, que impede o uso de funções não
declaradas.

*/