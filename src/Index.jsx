import { useState } from "react";
import React from 'react'

function index() {
  const[count,Setcount]=useState(0)
  return (
    <div className="heading">
      {count}
      <br/>
    <button  onClick={() => Setcount(count+1)}>increment</button>
    <button className='btn' onClick={()=>Setcount(0)}>reset</button>
     <button className='btn'
      onClick={()=>{
        if(count>0){
          Setcount(count-1) 
        }
      }}>
      decement</button>
    </div>
  )
}

export default index
