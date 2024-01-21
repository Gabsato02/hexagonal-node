# ANOTAÇÕES GERAIS

Para executar: copiar o app.js correspondente ao conceito que deseja entender, e depois
executar a aplicação com o Go Live do VSCode.

## CONCEITOS IMPORTANTES

**SINTAX PARSERS**: Programas que lêem o código e determinam o que faz, e se sua sintaxe é válida. O código é traduzido para algo que o computador possa entender.

**LEXICAL ENVIRONMENTS**: É o contexto onde variáveis e funções são definidas e acessadas em um programa, afetando diretamente o escopo interno e externo do código.

**EXECUTION CONTEXT**: O gerenciamento do contexto de execução do código que está rodando.

**SCOPE**: Onde a variável está disponível, e se é a mesma variável ou uma cópia.

**ASYNCHRONOUS**: Mais de um ao mesmo tempo.

## O JAVASCRIPT É

**SINGLE THREADED**: Processa um único conjunto de instruções de cada vez, de forma sequencial.

**SYNCHRONOUS**: No JavaScript, "síncrono" refere-se à natureza de bloqueio de certas operações. Quando uma operação é síncrona, isso significa que ela bloqueia a execução do código subsequente até que a operação seja concluída.

## TIPAGEM

**DYNAMIC TYPING**: A engine do Javascript "advinha" durante a execução qual o tipo de valor que uma variável possui.

### TIPOS PRIMITIVOS

1. **UNDEFINED**: falta de existência de um tipo/valor. Valor inicial para variáveis não inicializadas. Não deve ser usado ativamente.
2. **NULL**: falta de existência de um tipo/valor. Esse valor pode ser utilizado.
3. **BOOLEAN**
4. **NUMBER5**
5. **STRING**
6. **SYMBOL**: criado no ES6. Representa um valor único e imutável, que pode ser usado como identificador para propriedades de um objeto.

## OPERADORES

**OPERATOR PRECEDENCE & ASSOCIATIVITY**: ver tabela de precedência e associação [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## FUNÇÕES SÃO OBJETOS

**FIRST CLASS FUNCTIONS**: tudo que pode ser feito com tipos primitivos é possível fazer com funções. Atribuí-las a variáveis, passá-las como parâmetros e criá-las quando quiser.

**EXPRESSION**: um código que resulta num valor.
**STATEMENT**: um código que executa um trabalho.
