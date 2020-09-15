// @flow
import React, {useState} from 'react';

const Calculator = (props: Props) => {

  const [
    firstNumber: number,
    setFirstNumber: (num: number) => void
  ] = useState(undefined);

  const [
    secondNumber: number,
    setSecondNumber: (num: number) => void
  ] = useState(undefined);

  return (
      <div className="calculator">
        <input type="text" value={firstNumber} onChange={() => setFirstNumber()}/>
        <span>{props.operation}</span>
        <input type="text" value={secondNumber}/>
        <span>=</span>
        <input type="text"/>
      </div>
  )
}

type Props = {
  operation: string
}

export default Calculator;
