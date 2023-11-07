import React, { useState } from 'react'
import '../style/master.css'
import Payment1 from '../routing/Payment1'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MasterCom = () => {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
   const[toggle,setToggle]=useState(1)
   const data=[  {
      id:1,
       type:"student",
       name:"Chelsea",
      company:"Juspay",
      description:"Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship.",
        profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/chelsea_Juspay-1.webp",
       
    },
    {
        id:2,
        type:"student",
        name:"Susovan Gosh",
      company:"StepSetGo",
       description:"It's absolutely awesome guys. Go for it without a second thought and you won't regret it!",
       profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/SusovanGhosh.webp",
       
    },
    {
       id:3,
       type:"student",
       name:"Akash Bhist",
       company:"AccelQ",
       description:"Thank you prepbytes for providing wonderful opportunity during Covid time. Its constant mentorship support program helped me to enhance my coding skills and also to get a job at a reputed company. Thanks a lot.",
       profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/akash_bisht.webp",
       
    },
    {
        id:4,
        type:"student",
        name:"Tanej",
        company:"Authbridge",
       description:"Prepbytes helped  me in getting a job.I helps to fill the gap between theory and practice. Mainly what I like is the set of problems which are given just after the concept is very useful. Their doubt solving platform is good and fast. They don't give answer directly instead they ask your approach and correct that approach, this helps very much in technical interview.",
       profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Tanej+Kumar+Kata.webp",
       
    },
    {
        id:5,
        type:"student",
        name:"Akshay",
        company:"Indiamart",
        description:"A wonderful place to learn. PrepBytes helped me in learning important topics for coding interiew and also getting placed in Indiamart. ",
        profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Akshay_indiamart.webp",
       
    },
    {
       id:6,
       type:"student",
       name:"Shubham Mishra",
      company:"Blowhorn",
      description:"I enrolled in Placement Program in the month of November and within 6 months Prepbytes arranged 3-4 interviews in Product based companies/startup. The course content and practice questions are up to mark, the biggest advantage of this is that you will get a doubt clearing platform and weekly live sessions from engineers working in top product based MNCs.",
       profile:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Shubham+Mishra.webp",
       
    },
    {
        id:7,
        type:"student",
        name:"Shivam Gupta",
        description:"My coding experience has improved very much. After joining the program, I am able to write optimized code. The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea.",
        profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Shivam+Gupta.svg",
        company:"BuyHatke"
       
    },
    {
        id:8,
        type:"student",
       name:"Shivani Ravi",
       description:"PrepBytes have helped me improve my analytical skills & helped me in all the ways possible. My understanding of questions and logic has also increased. The best thing about PrepBytes are the lectures, it is so simple and everything is explained with examples. ",
        profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/shivani+Ravi.svg",
       company:"Sap Labs"
       
    },
    {
        id:9,
        type:"student",
        name:"Abhishek Kumar",
        description:"Lectures are up to the mark, concepts are crystal clear by the mentors. And the best part about the course is weekly assignments were provided to us which were not just good but ensuring that we were understanding the concepts but also improved our coding skills considerably ",
        profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Abhishek+Kumar.svg",
       company:"Tek System"
       
    },
    {
        id:10,
        type:"student",
        name:"Nikhil",
        description:"I got a mentor who was very knowledgeable & guided me throughout my placement journey. She explained everything very precisely and clearly & helped me with my doubts and coding problems. PrepBytes helped me a lot in gaining confidence. I thank PrepBytes for their effort. ",
        profile:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/testimonial/Nikhil.svg",
        company:"Sap Labs"
       
    }]
  
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

       <div className='master-coursole' >
       <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    
       </div>



        <div className='side-enroll'>
         <img src='https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/ApplyNow.svg' alt='not found'/>
         <p>Enroll Now</p>
        </div>
    </div>
  )
}

export default MasterCom
