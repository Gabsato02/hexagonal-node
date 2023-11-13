let a = 2, b = 3, c = 4;

a = b = c;

console.log(a, b, c);

/*

Todas as variáveis terão o valor 4, porque a ordem de associação do operador '=' é
da direita para a esquerda.

Então será executado b = c (4), e depois a = b (4).

*/