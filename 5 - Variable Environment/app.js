function b() {
  var myVar;
  console.log('b', myVar);
};

function a() {
  var myVar = 2;
  console.log('a', myVar);
  b();
  console.log('a', myVar);
}

var myVar = 1;
console.log('global', myVar);
a();

/*

Mesmo usando nomes iguais para as variáveis, cada uma obedece ambiente do contexto 
de execução da sua própria função.

*/