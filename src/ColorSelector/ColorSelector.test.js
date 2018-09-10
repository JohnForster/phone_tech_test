import React from 'react';
import { shallow, mount } from 'enzyme';
import {ColorSelector} from "./ColorSelector";

describe('ColorSelector', () => {
  let mockFunction, colorSelector;
  beforeEach(() => {
    mockFunction = jest.fn();
    colorSelector = shallow(
      <ColorSelector
        colors={['#f00','#0f0','#00f']}
        onSquareClick={mockFunction}
        currentColor='TestRed'
      />
    )
  });

  it('renders a box for each color', () => {
    expect(colorSelector.find('button').contains(<button className='color-square' style={{backgroundColor: '#0f0' }} />));
  });

  it('performs the onSquareClick function when a box is clicked', () => {
    colorSelector.find('button').first().simulate('click');
    expect(mockFunction.mock.calls[0][0]).toBe('#f00')
  });

  it('displays the currentColor', () => {
    expect(colorSelector.find('p.color-name').text()).toContain('TestRed')
  })
});