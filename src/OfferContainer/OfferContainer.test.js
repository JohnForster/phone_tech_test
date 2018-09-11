import React from 'react';
import { shallow, mount } from 'enzyme';
import { OfferContainer } from './OfferContainer';
import { testPhoneData }  from "../testPhoneData.js"

jest.mock('../ImageContainer/ImageContainer', () => ({
  ImageContainer: 'mockImageContainer'
}));

describe('OfferContainer', () => {
  let offerContainer;
  beforeEach(() => {
    offerContainer = shallow(<OfferContainer data={testPhoneData}/>);
  });


  it('is initialized by passing in phone data', () => {
    expect(offerContainer.state().groupName).toEqual('Test Phone 1');
    expect(offerContainer.state().activeDevice.deviceId).toEqual("test1a");
  });

  it('renders an ImageContainer component', () => {
    expect(offerContainer.children().contains(<mockImageContainer src={'test_image_path'} alt={'testPhone1'}/>));
  });

  describe('getColors', () => {
    it('returns a unique set of colours from an array of devices', () => {
      const devices = [{colourHex: '#005fa8'}, {colourHex: '#ff7bc2'}, {colourHex: '#8c4902'}, {colourHex: '#005fa8'}]
      const colors = offerContainer.instance().getColors(devices);
      expect(JSON.stringify(colors)).toEqual(JSON.stringify(['#005fa8', '#ff7bc2', '#8c4902']))
    })
  });

  describe('handleColorChange', () => {
    it('changes the active device based on colour', () => {
      expect(offerContainer.state().activeDevice.deviceId).toEqual("test1a");
      offerContainer.instance().handleColorChange('#00ff00');
      expect(offerContainer.state().activeDevice.deviceId).toEqual("test1b")
    })
  })

  describe('handleCapacityChange', () => {
    it('changes the active device based on colour', () => {
      expect(offerContainer.state().activeDevice.deviceId).toEqual("test1a");
      offerContainer.instance().handleCapacityChange('20GB');
      expect(offerContainer.state().activeDevice.deviceId).toEqual("test2a")
    })
  })
});