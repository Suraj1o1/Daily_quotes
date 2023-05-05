import React, { useEffect, useState } from 'react'
import AnimatedTitle from './AnimatedTitle'
import QuotesApi from '../Api/QuotesApi'
import Button from './Button'
import { laughingemotes } from '../images'


export default function DailyQuotes() {
const Apidatas=QuotesApi()
const[api,setapi]=useState(Apidatas)
const [jokes,setjokes]=useState({
  id:"",
  joke:"My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  status:""
})
const[quotesid,setQuotesid]=useState(Math.floor(Math.random() * 30));
const nextQuotes=()=>{
  setQuotesid(Math.floor(Math.random() * 30))
}



  const getJokes=async()=>{
  
    try {
      const response = await fetch("https://icanhazdadjoke.com/ ",{ headers: {
       "Accept":"application/json" 
      }});
      console.log(response);
      const data=await response.json()
      console.log(data)
      setjokes(data)
      console.log("the joke is ",jokes.joke)
    } catch (error) {
      console.error(error);
    }
  }



  
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",flexDirection:"column"}} >
       <div><AnimatedTitle/></div>  

       <div className='Quotes_container'>

        {api.filter((ele)=>ele.id===quotesid).map((fetch)=>{
          return <div key={fetch.id}>
            <div className='quote_Text'>"{fetch.quoteText}"</div>
            <div className='quotes_aurthor'>-----{fetch.quoteAuthor}</div>
          </div>
        })}
          

       </div>
       <div><Button classname='Quotes_btn' onclick={nextQuotes} Title='Next Quote' /></div>
         
       <div style={{marginTop:"40px"}}><img src={laughingemotes} alt="not found" width={180} height={180} />
         </div>

      <div className='Joke_container'>
            <div className='jokes_container'>"{jokes.joke}"</div>
      </div>
      
      <div><Button classname='jokes_btn' onclick={getJokes} Title="Next Joke" />

     
      
      </div>
          

    </div>
  )
}
