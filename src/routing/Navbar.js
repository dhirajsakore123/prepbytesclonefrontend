import React, { useEffect, useState } from 'react'
import prpbytes from '../logos/logoPrepBytes.svg'
import { useNavigate } from 'react-router-dom'
// import '../style/Nav.css'
import ham from '../logos/hamburger2.png'
import axios from 'axios'

const Navbar = () => {
  const loggedIn=localStorage.getItem('loggedIn')

const[user,setuser]=useState('')
const[initial,setInitial]=useState('')
console.log(initial)
// console.log(user.name)
// let initial=user.name.split(0,1)
// let nameinit=initial.split(0,1)
// console.log(nameinit)

  useEffect(()=>{
    if(loggedIn){
      setInitial(user.name)

      const token=localStorage.getItem("token")
      const token1=window.atob(token.split(".")[1])
      const jsonString = `${token1}`;
      const obj = JSON.parse(jsonString);
      const userId = obj._id;
      axios.post("http://localhost:4000/api/dashboard",{userId:userId})
      .then(res=>setuser(res.data))
     .catch(err=>console.log(err))
    }
},[])

    const [study,setStudy]=useState(false)
    const [course,setCourse]=useState(false)
    const [project,setProject]=useState(false)
    const [dash,setDash]=useState(false)
    const [slidermenu,setSliderMenu]=useState(false)
    const navigate=useNavigate()
    // console.log(loggedIn)
   const handelLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedIn')
    navigate('/login')
   }
  return (
    <div className='navbar'>
      <div className='nav1'><img src={prpbytes} alt='not found' className='prep-logo' onClick={()=>navigate('/')}/></div>
      <div className='nav2'>
        <div className={loggedIn?'loginsinup-btn-none':'loginsinup-btn'}>
            <button onClick={()=>navigate('/login')}>Login</button>
            <button onClick={()=>navigate('/signup')}>Sign up</button>
        </div>
        <div className={loggedIn?'route-menu-full':'route-menu'}>

            <div  onMouseEnter={()=>setStudy(true)} onMouseLeave={()=>setStudy(false)}>
                <div className='study-material'>
                   <div className='menu-box'>Study Material</div>
               </div>

                 <div className={study?'study-min-menu':'study-min-menufalse'} >
                   <div onClick={()=>navigate('/mock')}>Mock Tests</div>
                   <div onClick={()=>navigate('/video')}>Video Tutorial</div>
                 </div>
            </div>

           <div  onMouseEnter={()=>setCourse(true)} onMouseLeave={()=>setCourse(false)}>
                <div className='course-program' >
                   <div className='menu-box'>Courses and Programs</div>
               </div>

              <div className={course?'course-min-menu':'course-min-menuflase'}>
                <div onClick={()=>navigate('/master')}>Master Competitive Programming</div>
                <div onClick={()=>navigate('/fullstack')}>Full Stack Program</div>
              </div>
            </div>

            <div>
                <div className='elevation-academey'>
                   <div className='menu-box' onClick={()=>navigate('/elevation')}>Elevation Academy</div>
               </div>
            </div>

            <div onMouseEnter={()=>setProject(true)} onMouseLeave={()=>setProject(false)}>
                <div className='project'>
                   <div className='menu-box'>Project</div>
               </div>

              <div className={project?'project-min-menu':'project-min-menuflase'}>
                <div onClick={()=>navigate('/html')}>HTML </div>
                <div onClick={()=>navigate('/css')}>CSS</div>
                <div onClick={()=>navigate('/javascript')}>JavaScript</div>
                <div onClick={()=>navigate('/reactjs')}>React JS</div>
                <div onClick={()=>navigate('/nodejs')}>Node JS</div>
                <div onClick={()=>navigate('/mongodb')}>MongoDB</div>
              </div>
            </div>
        </div>
      </div>

      <div className={loggedIn?'nav3':'nav3-false'} onClick={()=>setDash(!dash)}>
       <div className='profile-dot'>{user && user.name[0].toUpperCase()}</div>
       <div className='profile-name'>Hi {user && user.name.split(' ',1)}</div>
         <div className='dashboard-minu' style={{display:dash?"flex":"none"}}>
           <div>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K' alt='not found'/>
             <p onClick={()=>navigate('/dashboard')}> My Dashboard</p>
          </div>
          <div onClick={handelLogout}>Logout</div>
         </div>
      </div>
        <img src={ham} alt='not found' className='hamburger-menu' onClick={()=>setSliderMenu(true)}/>
      <div className={slidermenu?'slider-menu':'slider-menu-false'}>
          <div onClick={()=>setSliderMenu(false)} className='cross'>X</div>
          <div className='silder-profile'>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8cGF0aCBpZD0idXNlciIgZD0iTTEwLjUsOEExMC41LDEwLjUsMCwxLDAsMjEsMTguNSwxMC41LDEwLjUsMCwwLDAsMTAuNSw4Wm0wLDQuMDY1QTMuNzI2LDMuNzI2LDAsMSwxLDYuNzc0LDE1Ljc5LDMuNzI2LDMuNzI2LDAsMCwxLDEwLjUsMTIuMDY1Wm0wLDE0LjU2NWE4LjExMyw4LjExMywwLDAsMS02LjItMi44ODgsNC43MjEsNC43MjEsMCwwLDEsNC4xNy0yLjUzMiwxLjAzNiwxLjAzNiwwLDAsMSwuMy4wNDcsNS42MDYsNS42MDYsMCwwLDAsMS43MzIuMjkyLDUuNTg0LDUuNTg0LDAsMCwwLDEuNzMyLS4yOTIsMS4wMzYsMS4wMzYsMCwwLDEsLjMtLjA0Nyw0LjcyMSw0LjcyMSwwLDAsMSw0LjE3LDIuNTMyQTguMTEzLDguMTEzLDAsMCwxLDEwLjUsMjYuNjI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtOCkiIGZpbGw9IiMwMzYiLz4KPC9zdmc+Cg==' alt=' not found'/>
            <p>Hi {user.name}</p>
          </div>
          <div className='silder-profile1'>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K' alt=' not found'/>
            <p onClick={()=>navigate('/dashboard')}>My Dashboard</p>
          </div>
          <div className='slider-menu-inner'>
            <p onClick={()=>{navigate('/fullstack');setSliderMenu(false)}}>Full Stack Program</p>
            <p onClick={()=>{navigate('/elevation');setSliderMenu(false)}}>Elevation Academy</p>
            <p onClick={()=>{navigate('/master');setSliderMenu(false)}}>Master Competitive Programming</p>
            <p onClick={()=>{navigate('/mock');setSliderMenu(false)}}>Mock Test</p>
            <p onClick={()=>{navigate('/video');setSliderMenu(false)}}>Video Tutorial</p>
            <p onClick={()=>{navigate('/html');setSliderMenu(false)}}>HTML</p>
            <p onClick={()=>{navigate('/css');setSliderMenu(false)}}>CSS</p>
            <p onClick={()=>{navigate('/javascript');setSliderMenu(false)}}>JavaScript</p>
            <p onClick={()=>{navigate('/reactjs');setSliderMenu(false)}}>React.js</p>
            <p onClick={()=>{navigate('/nodejs');setSliderMenu(false)}}>Node.js</p>
            <p onClick={()=>{navigate('/mongodb');setSliderMenu(false)}}>MongoDB</p>
           {loggedIn?<div onClick={handelLogout} className='login-logoutslider'>Logout</div>:<div  className='login-logoutslider' onClick={()=>navigate('/login')}>Login</div>}
          </div>


      </div>
    </div>
  )
}

export default Navbar
