function greet() {
  console.log('Hi');
};

greet.language = 'english';

console.log(greet.language);

/*

Funções são um tipo especial de objeto. Podem receber tipos primitivos, outros objetos e 
outras funções.

Possuem alguns atributos:
- Nome (opcional, pode ser anônima)
- Código (invocável)

*/