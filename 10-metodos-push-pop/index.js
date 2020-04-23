let numeros = [1, 2, 3, 4];

// REMOVENDO elemento no fim do array:
// OBS: devemos tomar cuidado ao usar o método pop(), pois ele modifica a estrutura do array
let removendoUltimoElementoComPop = numeros.pop();

// visualizando o elemento removido:
console.log(removendoUltimoElementoComPop);

// verificando se o último elemento foi removido:
console.log(numeros);


// INSERINDO elemento no fim do array:
numeros.push(4);

// verificando se o elemento foi inserido no fim do array:
console.log(numeros);
