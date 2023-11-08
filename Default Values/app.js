function greet(name) {
  name = name || '<Your name here>';
  console.log(`Hello, ${name}!`);
}

greet();
greet('Sato');

/*

O operador OR (||) vai retornar o primeiro valor convertido para um booleano true.

*/