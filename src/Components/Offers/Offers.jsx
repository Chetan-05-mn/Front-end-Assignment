import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offer'>
      <div className='offer-left'>
        <h1>Exclusive</h1>
        <h1>For you</h1>
        <p>only on best seller Products</p>
        <button>Check Now</button>
        </div>
        <div className='offer-right'>
        <img src={exclusive} alt="/" /> 
        </div>
    </div>
  )
}

export default Offers
