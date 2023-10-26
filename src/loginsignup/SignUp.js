import React, { useState } from 'react'
import axios from 'axios'
import '../style/loginsignup.css'

import illustrated from '../logos/illustrated.webp'
import pblogo from '../logos/pblogo.webp'
import collages from '../logos/college.webp'
import students from '../logos/students.webp'
import learning from '../logos/learning.webp'
import social from '../logos/social.webp'
import { useNavigate } from 'react-router-dom'



const SignUP = () => {
const navigate=useNavigate()

   const[name,setName]=useState('')
   const[email,setEmail]=useState('')
   const[phone,setPhone]=useState('')
   const[password,setPassword]=useState('')
   const[collage,setCollage]=useState('')
   const[passingyear,setPassingyear]=useState('')
   
  const  obj={
    "name":name,
     "email":email,
     "phone":phone,
     "collage":collage,
     "passingyear":passingyear,
     "password":password
 }

 const handelSubmit=(e)=>{
  e.preventDefault()

  axios.post("http://localhost:4000/api/register",obj)
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
       <img src={collages} alt='not found' className='inner-img'/>
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
     <div className='signup-heading1' onClick={()=>navigate('/signup')}>SIGNUP</div><div className='login-heading1' onClick={()=>navigate('/login')}>LOGIN</div>
    </div>
     <div className='signuplogin-heading'>Create your new account</div>
   
     <div className='box-loginsignup'>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} value={name}  className='input-loginsignup'/>
   </div>


    <div className='box-loginsignup'>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}  className='input-loginsignup'/>
   </div>

   <div className='box-loginsignup'>
    <label htmlFor="phone">Phone No</label>
    <input type="tel" id="phone" name="phone" onChange={(e)=>setPhone(e.target.value)} value={phone}  className='input-loginsignup'/>
   </div>

   <div className='box-loginsignup'>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}  className='input-loginsignup'/>
   </div>

   <div className='box-loginsignup1 '>

   <div>
    <label htmlFor="collage">Colleges</label>
    <input type="collage" id="collage" name="collage" onChange={(e)=>setCollage(e.target.value)} value={collage}  className='input-loginsignup1'/>
    </div>

    <div>
    <label htmlFor="year">Passing Year</label>
    <input type="number" id="year" name="year" onChange={(e)=>setPassingyear(e.target.value)} value={passingyear}  className='input-loginsignup1'/>
    </div>
   </div>


   
   <div className='box-loginsignup'>
      <button type='submit' className='button-loginsignup' >SIGN UP</button>
    </div>

     
    

    </div>
  </form>
     </div>
    </div>
  )
}

export default SignUP
