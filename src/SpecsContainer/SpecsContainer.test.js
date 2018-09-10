import React from 'react';
import { shallow, mount } from 'enzyme';
import {SpecsContainer} from "./SpecsContainer";

jest.mock('../ColorSelector/ColorSelector', () => ({
  ColorSelector: 'mockColorSelector'
}));

describe('SpecsContainer', () => {
  const mockFunction = jest.fn();
  const groupName = 'TestPhone 1', rating = '3.3', description = 'This is a test phone', colourName = 'testRed';
  const activeDevice = { displayDescription: description, colourName: colourName };
  const colors = ['#f00','#0f0','#00f'];
  const specsContainer = shallow(
    <SpecsContainer
      groupName={groupName}
      rating={rating}
      device={activeDevice}
      phoneColors={colors}
      selectColor={mockFunction}
    />
  );


  it('renders the group name', () => {
    expect(specsContainer.find('h1').text()).toEqual(groupName);
  });

  it('renders the group name', () => {
    expect(specsContainer.children().contains(<p>{description}</p>))
  });

  it('renders the rating', () => {
    expect(specsContainer.children().contains(<p>Rating: {rating}</p>))
  });

  it('renders a ColorSelector component', () => {
    expect(specsContainer.children().contains(
      <mockColorSelector
        colors={colors}
        currentColor={colourName}
        onSquareClick={mockFunction}
      />
    ))
  })
});