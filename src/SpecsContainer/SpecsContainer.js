import React from 'react';
import './SpecsContainer.css'

export function SpecsContainer(props) {
  return (
    <div className='specs-container'>
      <h1>{props.groupName}</h1>
      <p>Rating: {props.rating}</p>
      <p>{props.device.displayDescription}</p>
    </div>
  )
}