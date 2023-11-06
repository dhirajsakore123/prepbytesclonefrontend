import React, { useState } from 'react'
import '../style/master.css'
import Payment1 from '../routing/Payment1'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

const MasterCom = () => {
   const[toggle,setToggle]=useState(1)
   // const responsive = {
   //    superLargeDesktop: {
   //      // the naming can be any, depends on you.
   //      breakpoint: { max: 4000, min: 3000 },
   //      items: 5
   //    },
   //    desktop: {
   //      breakpoint: { max: 3000, min: 1024 },
   //      items: 3
   //    },
   //    tablet: {
   //      breakpoint: { max: 1024, min: 464 },
   //      items: 2
   //    },
   //    mobile: {
   //      breakpoint: { max: 464, min: 0 },
   //      items: 1
   //    }
   //  }
  return (
    <div className='master'>
       <div className='master-first'>
             <div className='master-first-cont1'>
                <p>MASTER COMPETITIVE PROGRAMMING</p>
                <p>Master Competitive Programming Fom Zero And Become A Top-Rated Coder <span>Under The Guidance Of Top Competitive Programmers</span></p>
                <button>Enrole Now</button>
             </div>
             <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp' alt='not found'/>
        </div>

        <div className='master-second'>
           <div className='master-second-box1'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp' alt='not found'/>
           <p>9 months intensive bootcamp</p>
           </div>
           <div className='master-second-box1 master-second-box2'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp' alt='not found'/>
           <p>Quick doubt resolution</p>
           </div>
           <div className='master-second-box1 master-second-box3 '>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp' alt='not found'/>
           <p>Live coding sessions with top-rated coders</p>
           </div>
           <div className='master-second-box1 master-second-box4'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp' alt='not found'/>
           <p>Get certificate on course completion</p>
           </div>
           
        </div>

        <div className='master-third'>
           <p>Get Guidance From Industry Leading Mentors</p>
           <p>Other Mentors You Will Be Interacting With</p>
           <div className='master-third-cont'>
            <div className='master-third-cont-inner' >
               <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp' alt='not found'/>
               <div className='master-third-cont-inner-cont1'>
                  <p>Mamta</p>
                  <p>Co-Founder,Prepbytes</p>
                  <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp' alt='not found'/>
               </div>
            </div>
            <div className='master-third-cont-inner' >
               <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp' alt='not found'/>
               <div className='master-third-cont-inner-cont1'>
                  <p>SED,sharechat</p>
                  <p>Co-Founder,Prepbytes</p>
                  <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp' alt='not found'/>
               </div>
            </div>
            <div className='master-third-cont-inner' >
               <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp' alt='not found'/>
               <div className='master-third-cont-inner-cont1'>
                  <p>Aveek</p>
                  <p>Mentor,Prepbytes</p>
                  <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp' alt='not found'/>
               </div>
            </div>
           

           </div>
        </div>

       <div className='master-threeandhalf'>
       Master Competitive Programming With Us
       </div>

        <div className='master-forth'>

            <div className='master-forth-con2-inner1'>
               <div className='master-forth-con2-inner1-row1'>
                  <div className='master-forth-con2-inner1-row1-cont1'>
                  <p>Personalised Program</p>
                   <p>Master your skills from where you are, with India's only personalised program</p>
                  </div>
                <div className='master-forth-con2-inner1-row1-cont2'>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp' alt='not found'/>
                </div>
               </div>
               <div className='master-forth-con2-inner1-row1'>
                  <div className='master-forth-con2-inner1-row1-cont1'>
                  <p>Quick Doubt Support</p>
                   <p>Get your doubts cleared by coding experts and have a smooth learning</p>
                   
                  </div>
                <div className='master-forth-con2-inner1-row1-cont2'>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Quick+Doubt+Support.webp' alt='not found'/>
                </div>
               </div>
               <div className='master-forth-con2-inner1-row1'>
                  <div className='master-forth-con2-inner1-row1-cont1'>
                  <p>250+ Coding Questions</p>
                   <p>Best way to master a language is by coding in the language</p>
                  </div>
                <div className='master-forth-con2-inner1-row1-cont2'>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp' alt='not found'/>
                </div>
               </div>
               <div className='master-forth-con2-inner1-row1'>
                  <div className='master-forth-con2-inner1-row1-cont1'>
                  <p>50+ Hours of Videos</p>
                   <p>Recorded video lectures by experts to help you understand the concepts easily</p>
                  </div>
                <div className='master-forth-con2-inner1-row1-cont2'>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Hours+of+Videos.webp' alt='not found'/>
                </div>
               </div>
            </div>

            <div  className='master-forth-con2-inner2'>
               <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg' alt='not found'/>
            </div>
            <div  className='master-forth-con2-inner3'>

               <div className='master-forth-con2-inner3-row1'>
                  <div className='master-forth-con2-inner3-row1-cont1'>
                  <p>Personalised Program</p>
                   <p>Master your skills from where you are, with India's only personalised program</p>
                  </div>
                <div className='master-forth-con2-inner3-row1-cont2'>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp' alt='not found'/>
                </div>
               </div>
               <div className='master-forth-con2-inner3-row1'>
                  <div className='master-forth-con2-inner3-row1-cont1'>
                  <p>Quick Doubt Support</p>
                   <p>Get your doubts cleared by coding experts and have a smooth learning</p>
                   
                  </div>
                <div className='master-forth-con2-inner3-row1-cont2'>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Quick+Doubt+Support.webp' alt='not found'/>
                </div>
               </div>
               <div className='master-forth-con2-inner3-row1'>
                  <div className='master-forth-con2-inner3-row1-cont1'>
                  <p>250+ Coding Questions</p>
                   <p>Best way to master a language is by coding in the language</p>
                  </div>
                <div className='master-forth-con2-inner3-row1-cont2'>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp' alt='not found'/>
                </div>
               </div>
               <div className='master-forth-con2-inner3-row1'>
                  <div className='master-forth-con2-inner3-row1-cont1'>
                  <p>50+ Hours of Videos</p>
                   <p>Recorded video lectures by experts to help you understand the concepts easily</p>
                  </div>
                <div className='master-forth-con2-inner3-row1-cont2'>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Hours+of+Videos.webp' alt='not found'/>
                </div>
               </div>

            </div>
          
       
        </div>

        <div className='master-five'> 
          <div className='master-five-inner'>
               <p>10K+</p>
               <p>Students Enrolled</p>
          </div>
          <div className='master-five-inner'>
               <p>1000K+</p>
               <p>Doubts Solved</p>
          </div>
          <div className='master-five-inner'>
               <p>2k+ hrs</p>
               <p>Mentor Interaction</p>
          </div>
        </div>
        <div className='master-six-heading'>
        Crack Reputed Coding Contests

        </div>
         
        <div className='master-six'>
           <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp' alt='not found'/>
        </div>

        <div className='sixth-enroll'>
          <p>SELECT BATCH</p>
          <div className='sixth-enroll-date-box'>
            <div className={toggle===1?'sixth-enroll-date-false':'sixth-enroll-date'} onClick={()=>setToggle(1)}>
              <p>1st May</p>
              <p>Enrolment Started</p>
            </div>
           <div className={toggle===2?'sixth-enroll-date-false':'sixth-enroll-date'} onClick={()=>setToggle(2)}>
            <p>15th May</p>
            <p>Enrolment Started</p>
          </div>
          </div>
          <div className='sixth-enroll-btn'>
            <p>₹ 25000</p>
             <div><Payment1 amount={25000} name={"MASTER COMPETITIVE PROGRAMMING"}/></div>
          </div>
       </div>

       <div className='master-coursole'>
         {/* <Carousel responsive={responsive}>

         </Carousel> */}
       </div>



        <div className='side-enroll'>
         <img src='https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/ApplyNow.svg' alt='not found'/>
         <p>Enroll Now</p>
        </div>
    </div>
  )
}

export default MasterCom
