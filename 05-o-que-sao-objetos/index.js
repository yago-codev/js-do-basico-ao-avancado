let cachorro = {
  nome: 'Pançudinho',
  patas: 4,
  latir() {
    console.log('Au, au!');
  },
};

// acessando props do objeto com notação ponto"
console.log(cachorro.nome); // Pançudinho

// acessando props do objeto com notação colchetes
console.log(cachorro['patas']); // 4

// acessando o método latir
cachorro.latir(); // Au, au!