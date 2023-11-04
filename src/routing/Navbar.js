import React, { useState } from 'react'
import prpbytes from '../logos/logoPrepBytes.svg'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [study,setStudy]=useState(false)
    const [course,setCourse]=useState(false)
    const [project,setProject]=useState(false)
    const [dash,setDash]=useState(false)
    const navigate=useNavigate()
    const loggedIn=localStorage.getItem('loggedIn')
    console.log(loggedIn)
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
                <div>Master Competitive Programming</div>
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
                <div>HTML </div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React JS</div>
                <div>Node JS</div>
                <div>MongoDB</div>
              </div>
            </div>
        </div>
      </div>

      <div className={loggedIn?'nav3':'nav3-false'} onClick={()=>setDash(!dash)}  >
       <div className='profile-dot'>D</div>
       <div className='profile-name'>Hi Dhiraj</div>
         <div className='dashboard-minu' style={{display:dash?"flex":"none"}}>
           <div>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K' alt='not found'/>
             <p> My Dashboard</p>
          </div>
          <div onClick={handelLogout}>Logout</div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
