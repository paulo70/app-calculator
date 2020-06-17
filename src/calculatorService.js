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

  return [
    calculate,
    SUM,
    SUBTRACTION,
    DIVIDED,
    MULTIPLICATION
  ]
}


export default calculatorService
