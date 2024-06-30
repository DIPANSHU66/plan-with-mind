import { useState } from 'react'
import React from 'react';
import './App.css'
import Tour from './components/Tour'
import { data } from './data';


function App() {

const [tours, setTours] = useState(data);

function  removeTour(id){
let newTours=tours.filter(tour => tour.id !== id);
setTours(newTours);}

if(tours.length==0){return  (<div className='refresh  text-5xl font-bold gap-10 bg-blue-200'>
  <h1 >No  Tours Left</h1>
  <button   className=' bg-gray-300 focus:ring-4 hover:bg-gray-400  font-bold py-2  px-4  rounded-l ' onClick={()=>setTours(data)}>Refresh</button>
</div>)}

  return (
    <>
    <div  className='App'><Tour   tours={tours} removeTour={removeTour}></Tour></div>
 
  </>
  )}

export default App
