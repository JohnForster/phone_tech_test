import React from 'react';
import { shallow, mount } from 'enzyme';
import {CapacitySelector} from "./CapacitySelector";

describe('CapacitySelector', () => {
  let mockFunction, capacitySelector;
  beforeEach(() => {
    mockFunction = jest.fn();
    capacitySelector = shallow(
      <CapacitySelector
        capacities={['1gb','2gb','3gb']}
        onSquareClick={mockFunction}
        currentCapacity={'1gb'}
      />
    )
  });

  it('renders a box for each capacity', () => {
    expect(capacitySelector.find('button.capacity-square')).toHaveLength(3)
  });

  it('performs the onSquareClick function when a box is clicked', () => {
    capacitySelector.find('button').first().simulate('click');
    expect(mockFunction.mock.calls[0][0]).toBe('1gb')
  });

  it('displays the currentCapacity', () => {
    expect(capacitySelector.find('span.capacity-name').text()).toEqual('1gb')
  });

  it('displays the capacities as text inside the buttons', () => {
    expect(capacitySelector.find('button').first().text()).toBe('1');
    expect(capacitySelector.find('button').last().text()).toBe('3');
  })
});