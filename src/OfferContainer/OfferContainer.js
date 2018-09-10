import React, { Component } from 'react';
import { ImageContainer } from '../ImageContainer/ImageContainer.js'
import './OfferContainer.css'

export class OfferContainer extends Component {
  constructor(props){
    super(props);
    const phoneData = props.data;
    this.state = {
      groupName: phoneData.groupName,
      devices: phoneData.deviceSummary,
      activeDevice: phoneData.deviceSummary[0],
    };
  }

  render() {
    const imageId = "PR_IMAGE_URLS_THUMBS_FRONT";
    return (
      <div className='offer-container'>
        {this.state.groupName}
        <ImageContainer device={this.state.activeDevice} imageId={imageId}/>
      </div>
    );
  }
}
