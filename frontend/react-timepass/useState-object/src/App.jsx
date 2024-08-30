import { useState } from 'react'
import './index.css'


function App() {

  const [data, setData] = useState({
    name:"",
    email:"",
    age:"",
    phone:""
  })
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    setData({
      ...data,[name]:value
    })
  }
  const handleSubmit = (e) =>{
    console.log(data)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h1>this is basic form </h1>
        <input type="text" name='name' value={data.name} placeholder='enter name' onChange={handleChange}/>
        <input type="email" name='email' value={data.email} placeholder='enter email'onChange={handleChange}/>
        <input type="number" name='age' value={data.age} placeholder='enter age'onChange={handleChange}/>
        <input type="number" name='phone' value={data.phone} placeholder='enter phone'onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
