// Desafio 11
function generatePhoneNumber(numbers) {
  let phone = []

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      let check = 0;
      for (let index3 = 0; index3 < numbers.length; index3 += 1) {
        if (index3 == index2) {
          check = check + 1
        }
      }
      if (index2 < 0 || index2 > 9 || check >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    for (let index4 = 0; index4 < numbers.length; index += 1) {
      if (index4 === 0) {
        phone += '(' + numbers[index4]
      } else if (index4 === 1) {
        phone += numbers[index4] + ')'
      } else if (index4 === 6) {
        phone += numbers[index4] + '-'
      } else {
        phone += numbers[index4]
      }
    }
  }
  return phone
}


generatePhoneNumber([4, 1, 9, 9, 5, 8, 4, 3, 2, 1, 2]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // let lines = [lineA, lineB, lineC]
  // let triangle;
  // for (let index = 0; index < lines.length; index = 0){
  //   let line = lines[index]
  //   for (let index2 = 0; index < lines.length; index += 1) {

  //   }
  // }
}
triangleCheck()
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
