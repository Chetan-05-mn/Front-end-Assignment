import React, { useState } from 'react'
import './Nav.css'
import cart from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
import search from '../Assets/search.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    const[menu,setMenu]=useState("shop")
  return (
    <div className='Navbar'>
        <div className='logo'>
            <img src={logo} alt='/'/>
            <h1>Fashion</h1>
        </div>
        <div className='search-bar'>
            <input type="text" className='text1' placeholder='Search for here'/><img src={search} alt='/'/>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>

            <li><a href='#'>Men</a>
            <ul className='sub-menu-of-men'>
            <li onClick={()=>setMenu("casual")}><Link style={{textDecoration:"none",color:'black',padding:10}} to='/casual'>Mens casual</Link> {menu==="casual"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Winter")}><Link style={{textDecoration:"none",color:'black',padding:10}} to='/Winter'>Kids Winter wear</Link>{menu==="Winter"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Ethnic")}><Link style={{textDecoration:"none",color:'black',padding:10}} to='/Ethnic'>Mens Ethnic wear</Link>{menu==="Ethnic"?<hr/>:<></>}</li>
        </ul></li>
            <li><a href="#">Women</a>
            <ul className='sub-menu-of-women'>
            <li onClick={()=>setMenu("Womens casual")}><Link style={{textDecoration:"none",color:'black',padding:10}} to='/Womens casual'>Womens casual</Link>{menu==="Womens casual"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Womens Winter")}><Link style={{textDecoration:"none",color:'black',padding:10}} to='/Womens Winter'>Womens Winter wear</Link>{menu==="WomensWinter"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Womens Ethnic")}><Link style={{textDecoration:"none",color:'black',padding:10}} to='/Womens Ethnic'>Womens Ethnic wear</Link>{menu==="Womens Ethnic"?<hr/>:<></>}</li>
        </ul>
            </li>
        </ul>
        
        <div className='cart-login'>
            <button className='btn-1'>Login</button>
            <img src={cart} alt="/"/>
        </div>
      
    </div>
  )
}

export default Nav
