// @flow
import React, {useState} from 'react';

const Square = (props: SquareProps) => {

  const [
    background: string,
    setBackground: (color: string) => void
  ] = useState('#fff');

  return (
      <div className="square"
           style={{
             paddingBottom: '20px'
           }}>
        <div style={{
          width: props.width,
          height: props.height,
          backgroundColor: background,
          border: '2px solid #ccc',
          borderRadius: '5px',
          margin: '15px auto'
        }}/>

        <button type="button" onClick={() => setBackground('red')}>Red</button>

        <button type="button" onClick={() => setBackground('green')}>
          Green
        </button>

        <button type="button" onClick={() => setBackground('blue')}>
          Blue
        </button>
      </div>
  )
}

type SquareProps = {
  width: number,
  height: number
}

export default Square;
