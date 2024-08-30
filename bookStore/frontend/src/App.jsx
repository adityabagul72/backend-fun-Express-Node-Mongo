import React from 'react'
import Home from "./home/Home" 
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={<Courses/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App