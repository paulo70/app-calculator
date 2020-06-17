import React from 'react';
import ReactDOM  from 'react-dom'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Calculator from './calculator';

describe('Calculate', () => {

  it('It should render component unless error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calculator />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('it shoudle clear calculator numbers field', () => {
    const { getByTestId, getByText } = render(<Calculator />)

    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('C'))

    expect(getByTestId('displayNumbers')).toHaveValue('0')
  })

  it('It should to sum 2 + 3 and get 5', () => {

    const { getByTestId, getByText } = render(<Calculator />)

    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('5'))

    expect(getByTestId('displayNumbers')).toHaveValue('5')
  })

  it('It should to subtract 5 - 3 and get 2', () => {
    const { getByTestId, getByText } = render(<Calculator />)

    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('displayNumbers')).toHaveValue('2')
  })

  it('It should to multiplicate 4 * 2 and get 8', () => {
    const { getByTestId , getByText } = render(<Calculator />)

    fireEvent.click(getByText('4'))
    fireEvent.click(getByText('*'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('='))

    expect(getByTestId('displayNumbers')).toHaveValue('8')
  })


  it('It should to divide 6 / 3 and get 2', () => {
    const { getByTestId , getByText } = render(<Calculator />)

    fireEvent.click(getByText('6'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('displayNumbers')).toHaveValue('2')
  })

  it('It should to sum 2.5 +  3 and get 5.5', () => {
    const { getByTestId , getByText } = render(<Calculator />)

    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('.'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))

    expect(getByTestId('displayNumbers')).toHaveValue('5.5')
  })

})

