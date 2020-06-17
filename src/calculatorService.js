function calculatorService(){
  const SUM = '+'

  function calculate(number1, number2, operation){
    let result;

    switch(operation) {
      case SUM:
      result = number1 + number2
      break;
    }


    return result
  }

  return [
    calculate
  ]
}


export default calculatorService
