import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  
  const [details, setDetails] = useState({
    name : "",
    email : "",
    password : ""
  })

  const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value)  
    setDetails({
      ...details,[name]:value  
    })

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    try{
      const response = axios.post('http://localhost:3000/submit',details)
      console.log(response.data)
    }
    catch(err){
      console.log(err)
    }

  }

  return (
    <>
    <form action="" onSubmit={handleSubmit} >
      <input type="text" name='name' onChange={handleChange} />
      <input type="text" name='email' onChange={handleChange} />
      <input type="number" name='password' onChange={handleChange} />
      <input type="submit"/>
    </form>
    
    </>
  )
}

export default App

