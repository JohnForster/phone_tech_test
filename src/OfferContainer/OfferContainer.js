import React, { Component } from 'react';
import { ImageContainer } from '../ImageContainer/ImageContainer.js'
import './OfferContainer.css'
import {SpecsContainer} from "../SpecsContainer/SpecsContainer";

export class OfferContainer extends Component {
  constructor(props){
    super(props);
    const phoneData = props.data;
    this.state = {
      groupName: phoneData.groupName,
      rating: phoneData.rating,
      devices: phoneData.deviceSummary,
      activeDevice: phoneData.deviceSummary[0],
      colors: this.getColors(phoneData.deviceSummary),
      capacities: this.getCapacities(phoneData.deviceSummary)
    };
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleCapacityChange = this.handleCapacityChange.bind(this)
  }

  getColors(devices) {
    const allColors = devices.map((device) => device.colourHex);
    return [...new Set(allColors)]
  }

  getCapacities(devices) {
    const allCapacities = devices.map((device) => device.memory);
    return [...new Set(allCapacities)]
  }

  handleColorChange(hex){
    const newDevice = this.state.devices.find((device) => {
      return device.memory === this.state.activeDevice.memory && device.colourHex === hex
    });
    this.setState({activeDevice: newDevice})
  }

  handleCapacityChange(memory){
    const newDevice = this.state.devices.find((device) => {
      return device.colourHex === this.state.activeDevice.colourHex && device.memory === memory
    });
    this.setState({activeDevice: newDevice});
  }

  render() {
    const imageId = "PR_IMAGE_URLS_THUMBS_FRONT";
    return (
      <div className='offer-container'>
        <ImageContainer device={this.state.activeDevice} imageId={imageId}/>
        <SpecsContainer
          groupName={this.state.groupName}
          rating={this.state.rating}
          device={this.state.activeDevice}
          phoneColors={this.state.colors}
          selectColor={this.handleColorChange}
          phoneCapacities={this.state.capacities}
          selectCapacity={this.handleCapacityChange}
        />
      </div>
    );
  }
}
