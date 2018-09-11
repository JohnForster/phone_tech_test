import React from 'react';
import './PriceContainer.css'

export function PriceContainer(props) {
  const priceInfo = props.device.priceInfo;
  const upfrontCost = priceInfo.hardwarePrice.oneOffPrice.gross;
  const monthlyCost = priceInfo.bundlePrice.monthlyPrice.gross;
  return (
    <div className="price-container">
      <div className="upfront-cost price-box">
        From £
        <span className="price">{upfrontCost}</span>
         upfront cost
      </div>
      <div className="monthly-cost price-box">
        From £
        <span className="price">{monthlyCost}</span>
         upfront cost
      </div>
    </div>
  )
}