import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [persons, setpersons] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data)
        setpersons(response.data)
      }).catch(err => {
        console.log(err, "error while fetching array")
      })
  }, [])

  return (
    <>
      <div className='text-white min-h-screen w-screen bg-slate-900 p-5' >
        <h1 className='text-2xl text-white text-center' >fetching data from ,...!@%^#???? Api</h1>
        <div className='persons-data mt-3 flex flex-wrap '>

          {persons.length >0 &&  
            persons.map((person) => (
              <div className=' m-2 person-card bg-zinc-800 rounded-md h-[300px] w-[220px]'>
                <div>
                  <img className='image-container bg-center bg-cover rounded-md' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <h1 className=' text-white text-sm mx-1 mt-2 '> <span className='font-bold' > id: </span> <span>{person.id}</span>   </h1>
                <h1 className=' text-white text-sm mx-1 mt-2 '> <span className='font-bold'>Username:</span>{person.username} </h1>
                <h2 className='text-sm mt-1 mx-1'> <span className='font-bold' >name:</span>{person.name}</h2>
                <h2 className='text-sm mt-1 mx-1'> <span className='font-bold'>email: </span>{person.email} </h2>
              </div>
            ))
          }
          

        </div>
      </div>
    </>
  )
}

export default App