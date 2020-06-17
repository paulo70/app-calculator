import React from 'react'
import ReactDOM from 'react-dom'
import CalculatorService from './calculatorService'

describe('Calculator Service test', () => {
  const [calculate] = CalculatorService()

  it('Should be that 1 + 4 = 5', () => {
    let sum = calculate(1, 4, '+')

    expect(sum).toEqual(5)
  })
})
