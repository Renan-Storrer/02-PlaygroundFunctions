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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
