import React from "react";
import './ImageContainer.css'

export function ImageContainer(props) {
  const image = props.device.merchandisingMedia.find((image) => image.id === props.imageId);
  return(
    <div className='image-container'>
      <img className='display-image' src={image.value} alt={props.device.displayName}/>
    </div>
  )
}