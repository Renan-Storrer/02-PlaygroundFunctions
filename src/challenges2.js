// Desafio 11
function generatePhoneNumber(numbers) {
  let phone = '('
  if(numbers.length !== 11){
    return 'Array com tamanho incorreto.'
  } else {
    for(let index = 0; index < numbers.length; index += 1){
      let contagem = 0;
      for (let index2 = 0; index2 < numbers.length; index2 += 1){
        if (index2 === index){
          contagem += 1;
        }
      }
      if (index < 0 || index > 9 || contagem > 2) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    for (let index3 = 0; index3 < numbers.length; index3 += 1){
      if (index3 === 1) {
        phone += numbers[index3] = ') '
      } else if (index3 === 6) {
        phone += numbers[index3]
      } else {
        phone += numbers[index3]
      }
    }
    return phone
  }
}
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
