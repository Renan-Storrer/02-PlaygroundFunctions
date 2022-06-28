// Desafio 11
function generatePhoneNumber(numberPhone) {
  let ddd = [];
  let primeirosNumeros = [];
  let ultimosNumeros = [];
  for (let index = 0; index <= 1; index += 1) {
    ddd.push(numberPhone[index])
  }
  ddd = '(' + ddd.join('') + ')';
  for (let index2 = 2; index2 <= 6; index2 += 1) {
    primeirosNumeros.push(numberPhone[index2])
  }
  primeirosNumeros = primeirosNumeros.join('')
  for (let index3 = 7; index3 < numberPhone.length; index3 += 1) {
    ultimosNumeros.push(numberPhone[index3])
  }
  ultimosNumeros = ultimosNumeros.join('')
  let numeroFinal = ddd + ' ' + primeirosNumeros + '-' + ultimosNumeros;
  let numeroFinalArray = numeroFinal.split('')
  let mensagemFinal;
  for (let index4 in numeroFinalArray) {
    if (numeroFinalArray[index4] < 0 || numeroFinalArray[index4] > 9) {
      mensagemFinal = 'não é possível gerar um número de telefone com esses valores'
    } else if (numeroFinalArray.length > 15) {
      mensagemFinal = 'Array com tamanho incorreto.'
    } else {
      mensagemFinal = numeroFinalArray.join('');
    }
  }
  return mensagemFinal
}
console.log(generatePhoneNumber([4, 1, 9, 9, 5, 8, 4, 3, 2, 1, 2]))
// Desafio 12
function triangleCheck()  {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
