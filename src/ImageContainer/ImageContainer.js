import React from "react";

export function ImageContainer(props) {
  const image = props.device.merchandisingMedia.find((image) => image.id === props.imageId);
  return <img src={image.value} alt={props.device.displayName}/>
}