import React from 'react'
import ReactDOM from 'react-dom'
import CalculatorService from './calculatorService'

describe('Calculator Service test', () => {
  const [calculate, numberConcat, SUM, SUBTRACTION, DIVIDED, MULTIPLICATION] = CalculatorService()

  it('Should be that 1 + 4 = 5', () => {
    let sum = calculate(1, 4, SUM)

    expect(sum).toEqual(5)
  })

  it('Should be that 1 - 4 = -3', () => {
    let subtraction = calculate(1, 4, SUBTRACTION)

    expect(subtraction).toEqual(-3)
  })

  it('Should be that 1 / 4 = 0.25', () => {
    let divided = calculate(1, 4, DIVIDED)

    expect(divided).toEqual(0.25)
  })

  it('should be that 1 * 4 = 4', () => {
    let multiplication = calculate(1, 4, MULTIPLICATION)

    expect(multiplication).toEqual(4)
  })

  it('should to return 0 to invalid operation', () => {
    let invalidOperation = calculate(1, 4, '%')

    expect(invalidOperation).toEqual(0)
  })
})
