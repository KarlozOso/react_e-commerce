import React from "react"
import './Contact.scss'

const Contact = () => {
  return(
    <div className='contact'>
    <div className='wrapper'>
    <span>BE IN TOUCH WITH US</span>
      <div className='mail'>
      <input className='text'placeholder='Enter your e-mail'/>
        <button>JOIN US</button>
      </div>
    </div>
    </div>
  )
}

export default contact