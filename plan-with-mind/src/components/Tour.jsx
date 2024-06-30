import React from 'react'
import Card from './Card'

function Tour({tours,removeTour}){
  return (
    <div  className='Container'>
      
        <h1 className='title  font-extrabold'>Plan With Mind</h1>
      
          <div  className='cards  '>
        {
          tours.map(  (tour)=>{
          return <Card  key={tour.id}  {...tour} removeTour={removeTour}></Card> 
          })
          }

        </div>
    
    </div>
  );
}

export default Tour;
