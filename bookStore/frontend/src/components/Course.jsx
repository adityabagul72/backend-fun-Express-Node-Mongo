import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Course() {
const[book,setBook]=useState([])
useEffect(()=>{
  axios.get("http://localhost:3000/book")  
  .then((response)=>{
    setBook(response.data)
  })
  .catch((error)=>{
    console.log("error occured ! ",error)
  })
},[])
  return (
    <>
      <div className='max-w-screen-2xl container px-4 md:px-9'>
        <div className=' text-center'>
          <h1 className='mt-28 text-center text-2xl font-semibold md:text-4xl'>We are Delighted to have you <span className='text-pink-500' >Here! :)</span></h1>

          <p className='text-center mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi tempore consectetur autem temporibus a recusandae ipsa asperiores expedita doloribus saepe, suscipit hic, nam perspiciatis, magnam adipisci ducimus sint. Atque cumque tempore suscipit, culpa sit perspiciatis aut necessitatibus veniam qui totam? Perspiciatis enim autem voluptate?
          </p>
          <Link to="/" >
            <button className='bg-pink-500 mt-4 rounded-md hover:bg-pink-600 hover:text-white font-semibold duration-300 p-2'>
              Back
            </button>
          </Link>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>

      </div>

    </>
  )
}

export default Course