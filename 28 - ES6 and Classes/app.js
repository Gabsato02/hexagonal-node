class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return `Hi, ${this.firstname}!`;
  }
};

class FormalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname); // Usado para acessar propriedades no prototype da classe
  }

  greet() {
    return `Hello, ${this.lastname}, ${this.firstname}!`;
  }
}

var john = new Person('John', 'Doe');
var jane = new FormalPerson('Jane', 'Doe');

console.log(john);

/*

As classes em JavaScript são diferentes de outras linguagens de programação.

Em JS, a classe é um objeto, e não apenas uma definição. Ela é construída sobre 
o princípio de prototypes.

É uma forma diferente de criar objetos e seus protótipos, mas executa a mesma coisa 
por trás dos panos.

*/