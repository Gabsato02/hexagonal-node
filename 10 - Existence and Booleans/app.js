console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean('')); // false
console.log(Boolean(0)); // false

var a;

if (a) {
  console.log('Something is there.');
} else {
  console.log(a);
}

/*

Importante lembrar que 0 é um valor convertido para false em qualquer checagem de booleano,
porém pode ser um valor válido em determinadas circunstâncias.

*/