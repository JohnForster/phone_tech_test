import React from 'react'
import {shallow} from 'enzyme'
import {Rating} from './Rating.js'

describe('Rating', () => {
  const rating = shallow(<Rating rating="4.3"/>);
  it('correctly scales the top rating', () => {
    expect(rating.find('div.star-rating-top')).toHaveStyle({"width":'86%'})
  });
});