import React from 'react'
import ReactTyped from 'react-typed'
import { animegirl } from '../images'

export default function AnimatedTitle() {
  return (
    <div >
      <div className='Animated_txt'> <ReactTyped
    className='Daily'
    strings={['Daily Awesome Quotes and Jokes to Enjoy']}
    
     typeSpeed={300}
   
    loop
    /></div>
   
    <div style={{marginTop:"50px"}}>
      <img src={animegirl} alt="kdjfkjf" width={120} height={120}/>
    </div>
      
    </div>
  )
}
