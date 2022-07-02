// Desafio 11
function generatePhoneNumber(numbers) {
  let phone = '(';
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else {
    for (number of numbers) {
      let contagem = 0;
      for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        if (index2 === number) {
          contagem += 1;
        }
      }
      if (number < 0 || number > 9 || contagem >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
      for (let index3 = 0; index3 < numbers.length; index3 += 1) {
        if (index3 === 1) {
          phone += numbers[index3] + ') ';
        } else if (index3 === 6) {
          phone += numbers[index3] + '-';
        } else {
          phone += numbers[index3];
        }
      }
      return phone;
    }
  }
}

// generatePhoneNumber(numbers);
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    if (lineA > (Math.abs(lineB - lineC)) && lineB > (Math.abs(lineA - lineC)) && lineC > (Math.abs(lineA - lineB))) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
