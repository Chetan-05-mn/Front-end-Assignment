import React from 'react'
import './Hero.css'
import ik from '../Assets/ik.png'

const Hero = () => {
  return (
    <div className='Hero'>
         <div class='hero-left'>
        <p>The Fastest Running Brand</p><br />
        <p style={{color:'black'}}>“If you do build a great experience,<br></br> customers tell each other about that.<br/>Word of mouth is very powerful.”</p>

      </div>
      <div class="hero-right">
        <img src={ik} alt="main" />

      </div>
      <div class="hero-right">

      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      
      
    </div>
  )
}

export default Hero
