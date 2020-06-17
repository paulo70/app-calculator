function calculatorService(){
  const SUM = '+'
  const SUBTRACTION = '-'
  const DIVIDED = '/'
  const MULTIPLICATION = '*'

  function calculate(number1, number2, operation){
    let result;

    switch(operation) {
      case SUM:
      result = number1 + number2
      break;

      case SUBTRACTION:
      result = number1 - number2
      break;

      case DIVIDED:
      result = number1 / number2
      break;

      case MULTIPLICATION:
      result = number1 * number2
      break;

      default:
        result = 0
    }


    return result
  }

  function numberConcat(currentNumber, concatNumber){
    // it has zero or null clear value

    if(currentNumber === '0' || currentNumber === null) {
      currentNumber = ''
    }

    // if currentNumber is a point it will concat zero before

    if(concatNumber === '.' && currentNumber === '') {
      return '0.'
    }

    // if typed a point and it already have a point just return

    if(concatNumber === '.' && currentNumber.indexOf('.') > -1 ) {
      return currentNumber
    }


    return currentNumber + concatNumber
  }

  return [
    calculate,
    numberConcat,
    SUM,
    SUBTRACTION,
    DIVIDED,
    MULTIPLICATION
  ]
}


export default calculatorService
