var person = {
	firstname: 'Gabriel',
	lastname: 'Sato',
	getFullName: function() {
		var fullname = `${this.firstname} ${this.lastname}`;
		return fullname;
	}
};

var logName = function(lang1, lang2) {
	console.log(`Logged: ${this.getFullName()}`)
	console.log(`Arguments: ${lang1} ${lang2}`);
};

// logName(); Retorna erro, pois this.getFullName não existe 

var logPersonNameBind = logName.bind(person);
logPersonNameBind(); // Executa corretamente, pois o valor de this agora é o objeto person

/*

BIND

O método bind retorna uma cópia de uma função que, quando executada,
atribui a variável this, o valor passado como parâmetro.

*/

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

/*

CALL & APPLY

Similares ao bind, mas executam a função ao invés de criar uma cópia.
Call espera uma lista de parâmetros, enquanto o Apply espera um array.

*/

// EXEMPLOS REAIS
var person2 = {
	firstname: 'John',
	lastname: 'Doe',
};

console.log(person.getFullName.apply(person2)); // John Doe - Function Borrowing

function multiply(a, b) {
	return a * b;
};

var multiplyByTwo = multiply.bind(this, 2); // Function Currying - Uma cópia de função, mas com parâmetros predefinidos

console.log(multiplyByTwo(10)); // 20