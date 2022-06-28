const { join } = require("path");

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true
  } else {
    return false
  };

}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado
}

// Desafio 3
function splitSentence(string) {
  let stringSplit = string.split(' ');
  return stringSplit;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let resultado = [];
  let resultadoFinal;
  resultado.push(array[array.length - 1]);
  resultado.push(array[0]);
  resultadoFinal = resultado.join(', ');
  return resultadoFinal
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints;
  let tiesPoints;
  winsPoints = wins * 3;
  tiesPoints = ties * 1;
  let points = winsPoints + tiesPoints;

  return points
}

console.log(footballPoints());

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let resultado = 0;
  for (let index in arrayDeNumeros) {
    let numeroVerificado = arrayDeNumeros[index];
    for (let index2 in arrayDeNumeros) {
      if (numeroVerificado >= arrayDeNumeros[index2]) {
        maiorNumero = numeroVerificado[index2]
      }
    }
    for (let index3 in arrayDeNumeros) {
      if (arrayDeNumeros[index3] === maiorNumero) {
        resultado = resultado + 1;
      }
    }
  }
  return arrayDeNumeros[resultado]
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
