import React, { useState } from 'react'
import '../style/loginsignup.css'
import illustrated from '../logos/illustrated.webp'
import pblogo from '../logos/pblogo.webp'
import collage from '../logos/college.webp'
import students from '../logos/students.webp'
import learning from '../logos/learning.webp'
import social from '../logos/social.webp'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
   const navigate=useNavigate()
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   
  const  obj={
     "email":email,
     "password":password
 }

 const handelSubmit=(e)=>{
   e.preventDefault()
 
   axios.post("http://localhost:4000/api/login",obj)
   .then((res)=>{
     if(res.data.token){
       
       localStorage.setItem('token',res.data.token)
       localStorage.setItem('loggedIn',true)
       navigate('/')
    }
   })
   .catch((err)=>console.log(err))
 
  }


  return (
    <div className='loginsignup'>
     <div className='login-img'>
        <img src={illustrated} alt='not found' className='illusion-img'/>
     </div>
     <div className='middle-box'>
       <img src={pblogo} alt='not found' className='pdlogo'/>
       <div className='inner-box'>
        
       </div>
       
       <div className='inner-box'>
          <img src={students} alt='not found' className='inner-img'/>
          <div className='inner-contentbox'>
           <div className='nums'>10K+</div>
           <div>Students Enrolled</div>
          </div>
       </div>


       <div className='inner-box'>
       <img src={collage} alt='not found' className='inner-img'/>
          <div className='inner-contentbox'>
           <div className='nums'>1000+</div>
           <div>Reach in Colleges</div>
          </div>
       </div>
       <div className='inner-box'>
       <img src={learning} alt='not found' className='inner-img'/>
          <div className='inner-contentbox'>
           <div className='nums'>10K+</div>
           <div>Hours of Learning</div>
          </div>
       </div>
       <div className='inner-box'>
       <img src={social} alt='not found' className='inner-img'/>
          <div className='inner-contentbox'>
           <div className='nums'>150K+</div>
           <div>Social Community</div>
          </div>
       </div>
       
      
     </div>

     
     <div className='login'>


     <form onSubmit={handelSubmit}>
    <div className='container-loginsignup'>
    <div className='box1-loginsignup'>
     <div className='signup-heading' onClick={()=>navigate('/signup')}>SIGNUP</div><div className='login-heading' onClick={()=>navigate('/login')}>LOGIN</div>
    </div>
     <div className='signuplogin-heading'>Sign in to your account</div>
    <div className='box-loginsignup'>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}  className='input-loginsignup'/>
   </div>

   <div className='box-loginsignup'>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}  className='input-loginsignup'/>
   </div>

   <div className='box-loginsignup'>
      <button type='submit' className='button-loginsignup' >SIGN IN</button>
    </div>

     
     <div>
      <span className='toggle-loginsignup'>Forgot your password?</span>
     </div>

    </div>
  </form>
     </div>
    </div>
  )
}

export default Login
