function a() {
  console.log('Started A'); // 1
  b();
  console.log('Ended A'); // 4
}

function b() {
  console.log('Started B'); // 2
  console.log('Ended B'); // 3
}

a();

/*
Toda vez que uma função é invocada, um novo Execution Context será criado e adicionado
ao Execution Stack, que é uma pilha de contextos a serem executados.

O contexto da função ficará no topo até que ela termine de ser executada, e então será
removido da fila.

A posição dos contextos na pilha independe da ordem léxica delas no código,
mas obedece a ordem de execução.

Esses contextos possuem seus próprios escopos.

S
T   -- b()
A   --- a()
C   ---- Global Execution Context
K

*/