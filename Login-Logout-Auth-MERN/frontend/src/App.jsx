import React from 'react'
import {Navigate,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={ <Navigate to='/login'/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route path='/signup' element={<SignUp/>}  />
      <Route path='/home' element={<Home/>}  />
     </Routes>
    </div>
  )
}

export default App