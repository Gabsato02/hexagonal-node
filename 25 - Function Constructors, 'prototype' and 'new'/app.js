function Person(firstname, lastname) {
	console.log(this.__proto__);
	this.firstname = firstname;
	this.lastname = lastname;
	// this.getFullName = () => `${this.firstname} ${this.lastname}`; NÃO FAZER ISSO**
}

Person.prototype.getFullName = function () {
	return `${this.firstname} ${this.lastname}`;
};

/*

** O ideal é que métodos sejam adicionados no prototype.

Dessa forma, só existirá UM método ocupando espaço na memória.

Ao adicionar um método como propriedade de objeto, cada instância de Person 
teria seu próprio 'getFullName', ocupando muito espaço na memória.

*/

var john = new Person('John', 'Doe');

/*

A palavra new cria um novo objeto vazio. Ao invocar uma função logo após ela,
o contexto de execução passa a apontar pra esse objeto. Portanto, this irá
modificá-lo.

*/

console.log(john);
console.log(john.getFullName());
