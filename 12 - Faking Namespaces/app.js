var english = {};

english.greetings.greet = 'Hello!'; // Cannot set properties of undefined (setting 'greet')

/*

O exemplo acima vai dar erro porque o operador '.' possui uma associação da esquerda
para direita. Ele vai começar retornando o objeto 'english', e depois vai tentar retornar
o objeto 'greetings'. Como este não existe, o valor retornado será 'undefined'.

O correto seria fazer:

var spanish;

spanish.greetings = {
  greet: 'Hola!'
};

O uso de objetos para conter variáveis também pode servir para substituir Namespaces.

Nesse caso, é possível ter uma variável 'greet' para quantos idiomas quiser,
desde que esteja encapsulada por diferentes objetos.
*/
