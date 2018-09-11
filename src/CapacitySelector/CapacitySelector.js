import React from 'react';
import './CapacitySelector.css'

export function CapacitySelector(props) {
  function handleClick(capacity){
    props.onSquareClick(capacity)
  }

  function generateSquares(capacities) {
    return capacities.map((capacity) => capacitySquare(capacity));
  }
  function capacitySquare(capacity) {
    return <button
      key={capacity}
      className='capacity-square'
      onClick={() => handleClick(capacity)}
    >{parseInt(capacity, 10)}</button>
  }

  return (
    <div className='capacity-selector'>
      <p>Capacity: <span className='capacity-name'>{props.currentCapacity}</span></p>
      {generateSquares(props.capacities)}
    </div>
  )
}

