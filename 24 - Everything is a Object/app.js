var a = {};
var b = function() {};
var c = [];

console.log(a.__proto__); // Object {}
console.log(b.__proto__.__proto__); // Object {}
console.log(c.__proto__.__proto__); // Object {}