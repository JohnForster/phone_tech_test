import React, { Component } from 'react';

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
    return (
      <div>{this.state.groupName}</div>
    );
  }
}
