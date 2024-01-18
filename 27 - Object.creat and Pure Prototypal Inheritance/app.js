var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return `Hi ${this.firstname}`;
  },
};

var john = Object.create(person);

john.firstname = 'John';
john.lastname = 'Doe';

/*

Object.create cria um objeto onde seu prototype apontará para o que foi passado
como parâmetro.

*/
console.log(john);