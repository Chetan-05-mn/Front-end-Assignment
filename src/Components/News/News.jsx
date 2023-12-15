import React from 'react'
import "./News.css"

const News = () => {
  return (
    <div className='New'>
        <h1>Get notification to your mail</h1>
        <p>Subscribe to our Website stay updated</p>

        <div className='News'>
            <input type='email' placeholder='Enter your mail-id'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default News
