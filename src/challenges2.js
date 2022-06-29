// Desafio 11
function generatePhoneNumber(numberPhone) {
  let ddd = '(' + numberPhone[0] + numberPhone[1] + ')'
  let primeirosNumeros = [];
  for (let index = 2; index < 7; index += 1){
    primeirosNumeros.push(numberPhone[index])
  }
  let primeirosNumerosString = primeirosNumeros.join('');
  let ultimosNumeros = [];
  for (let index2 = 7; index2 < numberPhone.length; index2 +=1) {
    ultimosNumeros.push(numberPhone[index2])
  }
  let ultimosNumerosString = ultimosNumeros.join('');
  let numeroFinal = ddd + ' ' + primeirosNumerosString + '-' + ultimosNumerosString;
  let mensagemFinal;
  if (numeroFinal.length === 15) {
    mensagemFinal = numeroFinal
  } else  if (numeroFinal.length != 15) {
    mensagemFinal = 'Array com tamanho incorreto.' 
  }
  console.log(mensagemFinal);
}
generatePhoneNumber([4, 1, 9, 9, 5, 8, 4, 3, 2, 1, 2, ]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC)  {
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
