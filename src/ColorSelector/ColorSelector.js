import React from 'react';
import './ColorSelector.css'

export function ColorSelector(props) {
  function handleClick(colorHex){
    props.onSquareClick(colorHex)
  }

  function generateSquares(colors) {
    return colors.map((color) => colorSquare(color));
  }
  function colorSquare(colorHex) {
    return <button
      key={colorHex}
      className='color-square'
      style={{backgroundColor: colorHex }}
      onClick={() => handleClick(colorHex)}
    />
  }

  return (
    <div className='color-selector'>
      <p>Colour: <span className='color-name'>{props.currentColor}</span></p>
      {generateSquares(props.colors)}
    </div>
  )
}

