import React from 'react';
import './SpecsContainer.css'
import {ColorSelector} from "../ColorSelector/ColorSelector";
import {CapacitySelector} from "../CapacitySelector/CapacitySelector";

export function SpecsContainer(props) {
  return (
    <div className='specs-container'>
      <h1>{props.groupName}</h1>
      <p>Rating: {props.rating}</p>
      <p>{props.device.displayDescription}</p>
      <ColorSelector
        colors={props.phoneColors}
        currentColor={props.device.colourName}
        onSquareClick={props.selectColor}
      />
      <CapacitySelector
        capacities={props.phoneCapacities}
        currentCapacity={props.device.memory}
        onSquareClick={props.selectCapacity}
      />
    </div>
  )
}