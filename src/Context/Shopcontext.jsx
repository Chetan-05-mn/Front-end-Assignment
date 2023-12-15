import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const Shopcontext= createContext(null);
const getdefaultcart=()=>{
    let cart={};
    for(let index=0;index<all_product.length;index++){
        cart[index]=0;
    }
    return cart;
}

const Shopcontextprovider=(props)=>{
    const [cartItems,setCartitems] = useState(getdefaultcart());
    

    const addtocart=(itemid)=>{
        setCartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartItems)
    }
    const removefromcart=(itemid)=>{
        setCartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
          
    const Shopcontextvalue={all_product,cartItems,addtocart,removefromcart};

    
    return (
        <Shopcontext.Provider value={Shopcontextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default Shopcontextprovider; 