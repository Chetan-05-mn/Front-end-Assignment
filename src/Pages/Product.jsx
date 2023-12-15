import React, { useContext } from 'react'
import all_product from '../Components/Assets/all_product';
import { Shopcontext } from '../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import Display from '../Components/Display/Display';

const Product = () => {
    const {all_product}=useContext(Shopcontext);
    const {productId}=useParams();
    const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <Display product={product}/>

    </div>
  )
}

export default Product
