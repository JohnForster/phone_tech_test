import React, { Component } from 'react';
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
      <p>Colour: </p><p className='color-name'>{props.currentColor}</p>
      {generateSquares(props.colors)}
    </div>
  )
}

