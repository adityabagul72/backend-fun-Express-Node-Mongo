import { useState } from 'react'
import './App.css'

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
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit} >
      <input type="text" name='name' onChange={handleChange} />
      <input type="password" name='password' onChange={handleChange} />
      <input type="email" name='email' onChange={handleChange} />
      <input type="submit"/>
    </form>
    
    </>
  )
}

export default App
