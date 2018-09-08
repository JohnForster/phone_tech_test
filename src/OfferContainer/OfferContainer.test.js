import React from 'react';
import { shallow, mount } from 'enzyme';
import { OfferContainer } from './OfferContainer';

describe('OfferContainer', () => {
  it('is initialized by passing in phone data', () => {
    const phoneData = [{
      "groupName": "Test Phone 1",
      "deviceSummary": [
        {"deviceId":"test1a"},
        {"deviceId":"test1b"},
      ]
    }];
    const offerContainer = shallow(<OfferContainer data={phoneData}/>);
    expect(offerContainer.state().groupName).toEqual('Test Phone 1');
    expect(offerContainer.state().activeDevice.deviceId).toEqual("test1a");
  })
});