function a() {
  console.log(this); // this vai referenciar o Objeto Global Window
  this.newVariable = 'Hello'; // Essa variável será declarada e adicionada ao contexto global
};

var b = function() {
  console.log(this); // this vai referenciar o Objeto Global Window
};

a();

console.log(newVariable);

b();

var c = {
  name: 'The C object',
  log: function() {
    this.name = 'Updated C object';
    console.log(this); // Nesse caso, this vai referenciar o Objeto onde o método está declarado
  
    var setname = function (newname) {
      this.name = newname; // Aqui, o this vai referenciar novamente o Objeto Global.
    };

    setname('Updated again!');

    console.log(this);
  },
};

c.log();

/*
Para resolver o caso acima, onde se quer alterar a propriedade 'name' do objeto 'c',
por meio da função 'setname', pode-se criar uma nova variável que, por referência,
será uma cópia do objeto 'this' no contexto do objeto 'c'.

var c = {
  name: 'The C object',
  log: function() {
    var self = this;
    self.name = 'Updated C object';
    console.log(self); // Nesse caso, this vai referenciar o Objeto onde o método está declarado
  
    var setname = function (newname) {
      self.name = newname; // Aqui, o this vai referenciar novamente o Objeto Global.
    };

    setname('Updated again!');
    console.log(self);
  },
};

c.log();


*/