import React from 'react';
import { shallow, mount } from 'enzyme';
import { OfferContainer } from './OfferContainer';
import {ImageContainer} from "../ImageContainer/ImageContainer";

describe('OfferContainer', () => {
  const phoneData = [{
    "groupName": "Test Phone 1",
    "deviceSummary": [
      {
        "deviceId": "test1a",
        "displayName": "testPhone1",
        "merchandisingMedia": [
          {"id": 'test_image_id', "value": 'test_image_path'}
        ],
      },
      {"deviceId":"test1b"},
    ]
  }];

  it('is initialized by passing in phone data', () => {
    const offerContainer = shallow(<OfferContainer data={phoneData}/>);
    expect(offerContainer.state().groupName).toEqual('Test Phone 1');
    expect(offerContainer.state().activeDevice.deviceId).toEqual("test1a");
  });

  it('renders an ImageContainer component', () => {
    const offerContainer = shallow(<OfferContainer data={phoneData}/>);
    expect(offerContainer.children().contains(<ImageContainer src={'test_image_path'} alt={'testPhone1'}/>));
  })
});