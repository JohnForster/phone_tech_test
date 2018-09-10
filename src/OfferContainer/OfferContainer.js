import React, { Component } from 'react';
import { ImageContainer } from '../ImageContainer/ImageContainer.js'

export class OfferContainer extends Component {
  constructor(props){
    super(props);
    const data = props.data;
    this.state = {
      groupName: data[0].groupName,
      devices: data[0].deviceSummary,
      activeDevice: data[0].deviceSummary[0],
    };
  }

  render() {
    const imageId = "PR_IMAGE_URLS_THUMBS_FRONT";
    return (
      <div>
        {this.state.groupName}
        <ImageContainer device={this.state.activeDevice} imageId={imageId}/>
      </div>
    );
  }
}
