import React from 'react';
import './PriceContainer.css'

export function PriceContainer(props) {
  const priceInfo = props.device.priceInfo;
  const upfrontCost = priceInfo.hardwarePrice.oneOffPrice.gross;
  const monthlyCost = priceInfo.bundlePrice.monthlyPrice.gross;
  return (
    <div className="price-container">
      <div className="upfront-cost price-box">
        from
        <p className="price"> £{upfrontCost}</p>
        upfront cost
      </div>
      <div className="monthly-cost price-box">
        when you pay
        <p className="price"> £{monthlyCost}</p>
         a month
      </div>
    </div>
  )
}