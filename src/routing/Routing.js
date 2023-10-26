import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import Navbar from './Navbar'
import Home from '../components/Home'
import Login from '../loginsignup/Login'
import SignUP from '../loginsignup/SignUp'
const Routing = () => {
  return (
    <div>
   
    <Routes>
      <Route  path='/'   element={<Home/>}/>  
      <Route  path='/login'   element={<Login/>}/>  
      <Route  path='/signup'   element={<SignUP/>}/>  
    </Routes>
    </div>
  )
}

export default Routing
