var a = {};
var b = function() {};
var c = [];

// Em algum nível, tudo vai se resumir a um objeto em JavaScript

console.log(a.__proto__); // Object {}
console.log(b.__proto__.__proto__); // Object {}
console.log(c.__proto__.__proto__); // Object {}