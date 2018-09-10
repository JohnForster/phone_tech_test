import React, { Component } from 'react';
import './ColorSelector.css'

export class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
    }
  }

  render() {
    return (
      <div className='color-selector'>
        {generateSquares(this.state.colors)}
      </div>
    )
  }
}

function generateSquares(colors) {
  return colors.map((color) => colorSquare(color));
}

function colorSquare(colorHex) {
  return <div className='color-square' key={colorHex} style={{backgroundColor: colorHex }} />
}