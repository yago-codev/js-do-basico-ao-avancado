let carro = {
  portas: 2,
  portaMalas: '200l',
  motor: '2.0',
};

let adicionais = {
  tetoSolar: true,
  arCondicionado: true,
};

// copiando as propriedades do objeto adicionais para o objeto carro:
Object.assign(carro, adicionais);

// verificando se as propriedades foram copiadas:
console.log(carro);