function b() {
  console.log('b', myVar); // Exibe a variável myVar do contexto global
};

function a() {
  function c() {
		console.log('c', myVar); // Exibe a variável myVar do contexto da função A
	}

  var myVar = 2;
  console.log('a', myVar);

  b();
  c();
}

var myVar = 1;
console.log('global', myVar);
a();

/*

Toda função possui referência ao contexto anterior imediato a ela.

No caso das funções A e B, é o contexto global, pois isso é determinado
pelo contexto léxico (ver README).

Sendo assim, a função B vai acessar a variável myVar do contexto global,
ao procurar e não encontrar essa variável em seu próprio contexto.

O compilador vai procurar variáveis nos contextos anteriores até que encontre ou
até chegar ao contexto global.

*/