var a = new Number(3); // Um objeto que encapsula um número e adiciona atributos e métodos
var a2 = 3; // Um primitivo do tipo número

console.log(a == a2, a === a2); // true, false

var b = new String('John'); // Um objeto que encapsula uma string e adiciona atributos e métodos
var b2 = 'John'; // Um primitivo do tipo string

/*

Em alguns casos, como em b2, o JavaScript entende que b2 é similar ao objeto String,
e adiciona atributos e métodos da mesma forma que seria usando new String.

*/

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

console.log(a, b);
console.log(b2.isLengthGreaterThan(4));