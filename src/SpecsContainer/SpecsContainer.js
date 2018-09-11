import React from 'react';
import './SpecsContainer.css'
import {ColorSelector} from "../ColorSelector/ColorSelector";
import {CapacitySelector} from "../CapacitySelector/CapacitySelector";
import {PriceContainer} from "../PriceContainer/PriceContainer";
import {Rating} from "../Rating/Rating";


export function SpecsContainer(props) {
  return (
    <div className='specs-container'>
      <h1>{props.groupName}</h1>
      <Rating rating={props.rating}/>
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
      <PriceContainer device={props.device}/>
    </div>
  )
}