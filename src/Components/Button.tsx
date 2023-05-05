import React from 'react'
type Props={
    Title:string,
    classname:string,
    onclick:()=>void
    
}

export default function Button({Title,classname,onclick}:Props) {
  return (

    <button className={classname} onClick={onclick}>{Title}</button>
   
  )
}
