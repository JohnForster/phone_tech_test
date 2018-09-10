import React from 'react';
import { shallow, mount } from 'enzyme';
import {ColorSelector} from "./ColorSelector";

describe('ColorSelector', () => {
  it('renders a box for each color', () => {
    const colorSelector = shallow(<ColorSelector colors={['#f00','#0f0','#00f']} />);
    expect(colorSelectoqqr.find('div').contains(<div className='color-square' style={{backgroundColor: '#0f0' }} />));
  })
});