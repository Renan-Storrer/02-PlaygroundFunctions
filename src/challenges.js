const { join } = require("path");

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
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
  return resultadoFinal;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints;
  let tiesPoints;
  winsPoints = wins * 3;
  tiesPoints = ties * 1;
  let points = winsPoints + tiesPoints;

  return points;
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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse
  let distanceCat2 = cat2 - mouse;
  let gatoMaisPerto = '';
  if (distanceCat1 < distanceCat2) {
    gatoMaisPerto = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    gatoMaisPerto = 'cat2';
  } else if (distanceCat1 === distanceCat2) {
    gatoMaisPerto = 'os gatos trombam e o rato foge';
  }
  return gatoMaisPerto
}

console.log(catAndMouse(0, 2, 1));

// Desafio 8
function fizzBuzz(numerosFizzBuzz) {
  let resultadoFizzBuzz = [];
  for (let index in numerosFizzBuzz) {
    if (numerosFizzBuzz[index] % 3 === 0 && numerosFizzBuzz[index] % 5 !== 0) {
     resultadoFizzBuzz.push('fizz')
    } else if (numerosFizzBuzz[index] % 5 === 0 && numerosFizzBuzz[index] % 3 !== 0) {
      resultadoFizzBuzz.push('buzz')
    } else if (numerosFizzBuzz[index] % 3 === 0 && numerosFizzBuzz[index] % 5 === 0) {
      resultadoFizzBuzz.push('fizzBuzz')
    } else {
      resultadoFizzBuzz.push('bug!')
    }
  }
  return resultadoFizzBuzz
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(stringEncode) {
  let stringInArray = stringEncode.split('');
  let arrayEncode = [];
  for (let index in stringInArray) {
    if(stringInArray[index] === 'a') {
      arrayEncode.push('1')
    } else if (stringInArray[index] === 'e') {
      arrayEncode.push('2')
    } else if (stringInArray[index] === 'i') {
      arrayEncode.push('3')
    } else if (stringInArray[index] === 'o') {
      arrayEncode.push('4')
    } else if (stringInArray[index] === 'u') {
      arrayEncode.push('5')
    } else {
      arrayEncode.push(stringInArray[index])
    }
  }
  let resultEncode = arrayEncode.join('')
  return resultEncode

}
console.log(encode('hi there!'))

function decode(stringDecode) {
  let stringInArray2 = stringDecode.split('');
  let arrayDecode = [];
  for (let index in stringDecode) {
    if(stringInArray2[index] === '1') {
      arrayDecode.push('a')
    } else if (stringInArray2[index] === '2') {
      arrayDecode.push('e')
    } else if (stringInArray2[index] === '3') {
      arrayDecode.push('i')
    } else if (stringInArray2[index] === '4') {
      arrayDecode.push('o')
    } else if (stringInArray2[index] === '5') {
      arrayDecode.push('u')
    } else {
      arrayDecode.push(stringInArray2[index])
    }
  }
  let resultadoDecode = arrayDecode.join('');
  return resultadoDecode
}
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(tech, name) {
  let resultadoTechList = [];
  for(let index in tech) {
    resultadoTechList.push( {
      tech: tech[index],
      name: name
    }
    )
    return resultadoTechList;
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
