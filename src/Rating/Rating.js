import React from 'react'
import './Rating.css'

export function Rating(props) {
  const percentage = parseInt((props.rating / 5) * 100, 10);
  const percentageWidth = { width: `${percentage}%` };
  return (
    <div className="star-rating">
      <div className="star-rating-top" style={percentageWidth}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="star-rating-bottom">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  )
}