import React from 'react';
import { shallow, mount } from 'enzyme';
import { PriceContainer } from './PriceContainer';
import { testPhoneData }  from "../testPhoneData.js"

describe('PriceContainer', () => {
  const testPhone = testPhoneData.deviceSummary[0]
  const priceContainer = shallow(<PriceContainer device={testPhone} />);

  it('Should display the upfront cost', () => {
    const upfrontCost = testPhone.priceInfo.hardwarePrice.oneOffPrice.gross;
    expect(priceContainer.find('div.upfront-cost').text().includes(`£${upfrontCost}`))
  })
});