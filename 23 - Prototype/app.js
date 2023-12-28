var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return `${this.firstname} ${this.lastname}`;
	}
};

// For DEMO purposes ONLY

var john = {
	firstname: 'John',
	lastname: 'Doe',
};

var jane = {
	firstname: 'Jane',
};

john.__proto__ = person;
jane.__proto__ = person;

console.log(john.getFullName());
console.log(jane.getFullName());

/*

PROTOTYPE CHAIN

O JavaScript vai buscar as propriedade e métodos solicitados no objeto,
caso não encontre vai buscar na cadeira de prototypes de onde esse objeto
herda.

*/