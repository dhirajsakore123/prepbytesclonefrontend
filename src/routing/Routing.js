import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import Navbar from './Navbar'
import Home from '../components/Home'
import Login from '../loginsignup/Login'
import SignUP from '../loginsignup/SignUp'
import MockTest from '../components/MockTest'
import VideoTutorials from '../components/VideoTutorials'
import FullstackProgram from '../components/FullstackProgram'
import ElevationAcademey from '../components/ElevationAcademey'
import MasterCom from '../components/MasterCom'
import Dashboard from '../components/Dashboard'
import Project from '../components/Project'
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
      <Route  path='/elevation'   element={<ElevationAcademey/>}/>  
      <Route  path='/master'   element={<MasterCom/>}/>  
      <Route  path='/dashboard'   element={<Dashboard/>}/>  
      <Route  path='/:id'   element={<Project/>}/>  
    </Routes>
    </div>
  )
}

export default Routing
