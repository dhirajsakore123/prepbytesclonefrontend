import React, { useState } from 'react'
import prpbytes from '../logos/logoPrepBytes.svg'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [study,setStudy]=useState(false)
    const [course,setCourse]=useState(false)
    const [project,setProject]=useState(false)
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
                   <div>Mock Tests</div>
                   <div>Video Tutorial</div>
                 </div>
            </div>

           <div  onMouseEnter={()=>setCourse(true)} onMouseLeave={()=>setCourse(false)}>
                <div className='course-program' >
                   <div className='menu-box'>Courses and Programs</div>
               </div>

              <div className={course?'course-min-menu':'course-min-menuflase'}>
                <div>Master Competitive Programming</div>
                <div>Full Stack Program</div>
              </div>
            </div>

            <div>
                <div className='elevation-academey'>
                   <div className='menu-box'>Elevation Academy</div>
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
      <div className={loggedIn?'nav3':'nav3-false'} onClick={handelLogout}>
       <div className='profile-dot'>D</div>
       <div className='profile-name'>Hi Dhiraj</div>
      </div>
    </div>
  )
}

export default Navbar
