import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import Navbar from './Navbar'
import Home from '../components/Home'
import Login from '../loginsignup/Login'
import SignUP from '../loginsignup/SignUp'
import MockTest from '../components/MockTest'
import VideoTutorials from '../components/VideoTutorials'
import FullstackProgram from '../components/FullstackProgram'
const Routing = () => {
  return (
    <div>
   
    <Routes>
      <Route  path='/'   element={<Home/>}/>  
      <Route  path='/login'   element={<Login/>}/>  
      <Route  path='/signup'   element={<SignUP/>}/>  
      <Route  path='/mock'   element={<MockTest/>}/>  
      <Route  path='/video'   element={<VideoTutorials/>}/>  
      <Route  path='/fullstack'   element={<FullstackProgram/>}/>  
    </Routes>
    </div>
  )
}

export default Routing
