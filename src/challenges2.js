// Desafio 11
function generatePhoneNumber(numbers) {
  let phone = '(';

  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.'
  } else {
    for (number of numbers) {
      let check = 0;
      for (let checkNumber = 0; checkNumber < numbers.length; checkNumber += 1) {
        if (checkNumber == number) {
          check += 1
        }
      }
      if (number < 0 || number > 9 || check >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    for (let index = 0; index < numbers.length; index += 1) {
      if (index == 1) {
        phone += numbers[index] + ') ';
      } else if (index === 6) {
        phone += numbers[index] + '-'
      } else {
        phone += numbers[index]
      }
    }
    return phone
  }
}

// generatePhoneNumber([4, 1, 9, 9, 5, 8, 4, 3, 2, 1, 2]);

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
