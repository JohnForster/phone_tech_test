import React from 'react';
import { shallow, mount } from 'enzyme';
import {ImageContainer} from "./ImageContainer";

describe('ImageContainer', () => {
  it('renders an img element from the given device and ID', () => {
    const idString = "TEST_ID",
      valueString = "test/this_is_a_test_image.png",
      displayName = "testPhone 1";
    const activeDevice = {
      "displayName": displayName,
      "merchandisingMedia": [
      { "id": idString, "value": valueString }
    ]};
    const imageContainer = shallow(<ImageContainer device={activeDevice} imageId={idString}/>);
    expect(imageContainer.find('img').contains(<img src={valueString} alt={displayName}/>));
  })
});