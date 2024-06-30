import React from 'react'
import { useState } from 'react';

function Card ({id,name,price,info,image,removeTour}) {

    const   [readmore,setreadmore]=useState(false);

    const  description=  readmore?info:`${info.substring(0,50)}....`;

    function  readmoreHandler(){ 
      
      setreadmore(!readmore); }
  
  return (
    <div  className='card'>
        <img src={image}  className='image  brightness-125' alt="" />

         <div className='tour-info'>

      <div  className='tour-details'>
            <h4 className='tour-price flex  font-bold'>{price}</h4>
            <h4 className='tour-name  flex  font-bold'>{name}</h4>
        </div>

        <div  className='description'> {description}
            <span   className='readmore font-extrabold' onClick={readmoreHandler}>
                {readmore ? "Show less" : " Read more"}
            </span></div>

           
      </div>

      <button className='btn-red' onClick={()=>removeTour(id)}>
                NOT INTERESTED
        </button>

   </div>
  )
}

export default Card;
