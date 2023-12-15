import React, { useContext } from 'react'
import './ShopCategory.css'
import { Shopcontext } from '../Context/Shopcontext'
import Items from '../Components/Items/Item'
import drop_down from '../Components/Assets/dropdown_icon.png'


const ShopCategory = (props) => {
    const {all_product}=useContext(Shopcontext)
  return (
    <div className='shop-category'>
        <img className='shop-category-banner' src={props.banner} alt="/" />
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={drop_down} alt="/" />
        </div>
      </div>
      <div className='shopcategory_products'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null
          }
        })}
      </div>
      <div className='shopcategory-button'>
      Explore more

      </div>
      
    </div>
  )
}

export default ShopCategory
