import React, { useState } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'

import './calculator.css';
import CalculatorService from './calculatorService'

function Calculator() {
  const [
    calculate,
    numberConcat,
    SUM,
    SUBTRACTION,
    DIVIDED,
    MULTIPLICATION
  ] = CalculatorService()

  const [ displayNumbers, setDisplayNumbers ] = useState('0')
  const [ numberOne, setNumberOne ]           = useState('0')
  const [ numberTwo, setNumberTwo ]           = useState(null)
  const [ operation, setOperations ]          = useState(null)


  function addNumber(number){
    let result;

    if( operation === null ) {

      result = numberConcat(numberOne, number)
      setNumberOne(result)

    } else {

      result = numberConcat(numberTwo, number)
      setNumberTwo(result)
    }

    setDisplayNumbers(result)
  }

  function setOperation(op) {

    if( operation === null ){

      setOperations(op)
      return
    }

    if( numberTwo !== null ) {
      const result = calculate( parseFloat(numberOne) , parseFloat(numberTwo), operation)
      setOperations(op)

      setNumberOne(result.toString())
      setNumberTwo(null)

      setDisplayNumbers(result.toString())
    }

  }

  function actionCalculate(){

    if( numberTwo === null ) {
      return
    }

    const result = calculate( parseFloat(numberOne), parseFloat(numberTwo), operation)
    setDisplayNumbers(result)
  }


  function clear(){
    setDisplayNumbers('0')
    setNumberOne('0')
    setNumberTwo(null)
    setOperations(null)
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>

    <Container>
      <Row>
        <Col xs='3'>
          <Button variant='danger' onClick = {clear}> C </Button>
        </Col>
        <Col xs='9'>
          <Form.Control
            type='text'
            name='displayNumbers'
            className='text-right'
            readOnly='readonly'
            value = {displayNumbers}
           />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant='light' onClick = {() => addNumber('7')}> 7</Button>
        </Col>
        <Col>
          <Button variant='light' onClick = {() => addNumber('8')}> 8</Button>
        </Col>
        <Col>
          <Button variant='light' onClick = {() => addNumber('9')}> 9</Button>
        </Col>
        <Col>
          <Button variant='warning' onClick = {() => setOperation('/')}> / </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant='light' onClick = {() => addNumber('4')}> 4</Button>
        </Col>
        <Col>
          <Button variant='light' onClick = {() => addNumber('5')}> 5</Button>
        </Col>
        <Col>
          <Button variant='light' onClick = {() => addNumber('6')}> 6</Button>
        </Col>
        <Col>
          <Button variant='warning' onClick = {() => setOperation('*')}> * </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant='light' onClick = {() => addNumber('1')}> 1</Button>
        </Col>
        <Col>
          <Button variant='light' onClick = {() => addNumber('2')}> 2</Button>
        </Col>
        <Col>
          <Button variant='light' onClick = {() => addNumber('3')}> 3</Button>
        </Col>
        <Col>
          <Button variant='warning' onClick = {() => setOperation('-')}> - </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant='light' onClick = {() => addNumber('0')}> 0</Button>
        </Col>
        <Col>
          <Button variant='light' onClick = {() => addNumber('.')}> .</Button>
        </Col>
        <Col>
          <Button variant='success' onClick = {actionCalculate}> = </Button>
        </Col>
        <Col>
          <Button variant='warning' onClick = {() => setOperation('+')}> + </Button>
        </Col>
      </Row>
    </Container>
    </Jumbotron>
  );
}

export default Calculator;
