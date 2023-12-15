import React, { useContext } from 'react'
import './Display.css'
import star from '../Assets/star_icon.png'
import dull_star from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../Context/Shopcontext'

const Display = (props) => {
    const {product} = props
    const {addtocart}= useContext(Shopcontext)
  return (
    <div className='display'>
        <div className='display-left'>
            <div className='display-img-list'>
                <img src={product.image} alt="/" />
                <img src={product.image} alt="/" />
                <img src={product.image} alt="/" />
                <img src={product.image} alt="/" />
            </div>
            <div className='display-main-image'>
                <img src={product.image} alt="/" />
            </div>
        </div>
        <div className='display-right'>
            <h1>{product.name}</h1>
            <div className='star-img'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={dull_star} alt="" />
                <p>(122)</p>
            </div>
            <div className='displayprices'>
                <div className='old'><del>${product.old_price}</del></div>
                <div className='new'>${product.new_price}</div>
            </div>
            <div className='description'>
                <p>Each year, more than 1000 new designs embellished with pageantry and beautiful looks and styles of Clothes for men and women are visualized and created by a team of highly skilled designers.</p> 
            </div>
            <div className='displays'>
                <h1>Select Size</h1>
                <div className='size'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
                </div>
                <div className='button'>
                    <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Display
