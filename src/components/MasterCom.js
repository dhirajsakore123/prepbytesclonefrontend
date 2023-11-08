import React, { useState } from 'react'
import '../style/master.css'
import Payment1 from '../routing/Payment1'
import Carousel1 from './Carousel'



const MasterCom = () => {

  
   const[toggle,setToggle]=useState(1)
 
    const [togle, setTogle] =useState(false)
    const [togle2, setTogle2] =useState(false)
    const clickHandler1 =()=>{
        setTogle(false);
        setTogle2(true);
    }
    const clickHandler2 =()=>{
        setTogle(false);
        setTogle2(false);
    }
  
  return (
    <div className='master'>
       <div className='master-first'>
             <div className='master-first-cont1'>
                <p>MASTER COMPETITIVE PROGRAMMING</p>
                <p>Master Competitive Programming Fom Zero And Become A Top-Rated Coder <span>Under The Guidance Of Top Competitive Programmers</span></p>
                <button  onClick={()=>window.scrollTo(2700,2700)}>Enrole Now</button>
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
        <h1 >Curriculum</h1>
       <div className='master-cariculum'>
          <div className='master-cariculum-left' >
         {/* <div> */}
        <div onClick={()=>setTogle(true)} className="master-cariculum-left-card">
            <img className="logo" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="c/c++/java"/>
            <div className={togle ?`leftTitle`:""}>Language Fundamentals (Choose any one of C/C++/Java/Python)</div>
        </div>
        <div onClick={clickHandler1} className="master-cariculum-left-card">
            <img className="logo" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon2.webp" alt="DSA"/>
            <div className={!togle &&togle2?`leftTitle`:""}>Data Structures and Algorithms</div>
        </div>
        <div onClick={clickHandler2} className="master-cariculum-left-card">
            <img className="logo" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon3.webp" alt="competitivemath"/>
            <div className={!togle && !togle2?`leftTitle`:""}>Competitive Maths</div>
        </div>

        <img className="leftImg" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Curriculum-Image.webp" alt="lftimg"/>
          </div>
          <div className="master-cariculum-right">

            {togle
            ?<ul className='master-cariculumlist' >
            <li>C/C++/Java/Python Overview</li>
            <li className="empty"></li>
            <li>Logic Building</li>
            <li className="empty"></li>
            <li>Data Types</li>
            <li className="empty"></li>
            <li>Pattern Programming</li>
            <li className="empty"></li>
            <li>Operators and Expressions</li>
            <li className="empty"></li>
            <li>Input/Output</li>
            <li className="empty"></li>
            <li>Functions</li>
            <li className="empty"></li>
            <li>Functions and OOPs(Python)</li>
            <li className="empty"></li>
            <li>Pointers(C/C++)</li>
            <li className="empty"></li>
            <li>Arrays</li>
            <li className="empty"></li>
            <li>Structures</li>
            <li className="empty"></li>
            <li>Character Arrays and Strings</li>
            <li className="empty"></li>
            <li>Recursion</li>
            <li className="empty"></li>
            <li>Bit Manipulation</li>
            <li className="empty"></li>
            <li>STLs(C++)</li>
            <li className="empty"></li>
            <li>Collections (Java)</li>
            <li className="empty"></li>
            <li>Set, List, Tuples, Dictionary(Python)</li>
            
        </ul>
            :!togle &&togle2
            ?<ul className='master-cariculumlist'>
            <li>Linked List</li>
            <li className="empty"></li>
            <li>Stack</li>
            <li className="empty"></li>
            <li>Queues</li>
            <li className="empty"></li>
            <li>Trees</li>
            <li className="empty"></li>
            <li>Heaps</li>
            <li className="empty"></li>
            <li>Graphs</li>
            <li className="empty"></li>
            <li>Segment Tree</li>
            <li className="empty"></li>
            <li>Searching</li>
            <li className="empty"></li>
            <li>Sorting</li>
            <li className="empty"></li>
            <li>Hashing</li>
            <li className="empty"></li>
            <li>Intro to DS/Algo</li>
            <li className="empty"></li>
            <li>Time Complexity</li>
            <li className="empty"></li>
            <li>Back Tracking</li>
            <li className="empty"></li>
            <li>Divide & Conquer</li>
            <li className="empty"></li>
            <li>Greedy Algorithms</li>
            <li className="empty"></li>
            <li>Dynamic Programming</li>
            <li className="empty"></li>
            <li>String Matching Algorithms</li>
            
        </ul >
            :<ul className='master-cariculumlist' style={{listStyle:"disc"}}>
            <li>Prime Numbers</li>
            <li className="empty"></li>
            <li>Permutation & Combinations</li>
            <li className="empty"></li>
            <li>GCD</li>
            <li className="empty"></li>
            <li>LCM</li>
            <li className="empty"></li>
            <li>Probabilities</li>
            <li className="empty"></li>
            <li>Number Theory</li>
            <li className="empty"></li>
            <li>Modular Arithmetic</li>
            <li className="empty"></li>
            <li>Binary Exponention</li>
            <li className="empty"></li>
            <li>Matrix Exponentiation</li>
            <li className="empty"></li>
            <li>Game Theory</li>
            <li className="empty"></li>
            <li>Computational Geometry</li>
            
            
        </ul>}

            
           </div>
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

       <div className='master-coursole' >
       
      <Carousel1/>
       </div>



        <div className='side-enroll'>
         <img src='https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/ApplyNow.svg' alt='not found'/>
         <p>Enroll Now</p>
        </div>
    </div>
  )
}

export default MasterCom
