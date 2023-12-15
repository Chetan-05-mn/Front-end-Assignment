import React from 'react'
import './Footer.css'
import flogo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pintest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='logo1'>
        <img style={{color:'#fce3fe'}} src={flogo} alt="/" /> 
        <ul className='list'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul> 
        <div className='logo-section'>
            <div className='insta'>
                <img src={instagram} alt="/" />
            </div>
            <div className='pint'>
                <img src={pintest} alt="/" />
            </div>
            <div className='whatsapp'>
                <img src={whatsapp} alt="/" />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p style={{color:"red"}}>Copyright @ 2023 - All right reserve</p>
        </div>
    </div>
  )
}

export default Footer
