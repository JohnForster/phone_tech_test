import React, { Component } from 'react';
import './ColorSelector.css'

export class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
      onSquareClick: props.onSquareClick,
      currentColor: props.currentColor || 'no color found',
    }
  }

  handleClick(colorHex){
    this.state.onSquareClick(colorHex)
  }

  generateSquares(colors) {
    return colors.map((color) => this.colorSquare(color));
  }
  colorSquare(colorHex) {
    return <button
      key={colorHex}
      className='color-square'
      style={{backgroundColor: colorHex }}
      onClick={() => this.handleClick(colorHex)}
    />
  }

  render() {
    return (
      <div className='color-selector'>
        <p>Colour: </p><p className='color-name'>{this.state.currentColor}</p>
        {this.generateSquares(this.state.colors)}
      </div>
    )
  }
}

