import React from 'react';
import { shallow, mount } from 'enzyme';
import {ColorSelector} from "./ColorSelector";

describe('ColorSelector', () => {
  let mockFunction;
  beforeEach(() => {
    mockFunction = jest.fn();
  });

  it('renders a box for each color', () => {
    const colorSelector = shallow(<ColorSelector colors={['#f00','#0f0','#00f']} onSquareClick={mockFunction} />);
    expect(colorSelector.find('button').contains(<button className='color-square' style={{backgroundColor: '#0f0' }} />));
  });

  it('performs the onSquareClick function when a box is clicked', () => {
    const colorSelector = shallow(<ColorSelector colors={['#f00','#0f0','#00f']} onSquareClick={mockFunction}/>)
    colorSelector.find('button').first().simulate('click');
    expect(mockFunction.mock.calls[0][0]).toBe('#f00')
  })
});