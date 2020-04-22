let pessoa = {
  nome: 'Yago',
  idade: 28,
  profissao: 'Programador',
}

// criando nova propriedade:
pessoa.novaPropriedade = 'Valor da nova propriedade';

// verificando se a propriedade foi criada:
console.log(pessoa.novaPropriedade);

// deletando propriedades:
delete pessoa.novaPropriedade;

// verificando se a propriedade foi deletada:
console.log(pessoa);