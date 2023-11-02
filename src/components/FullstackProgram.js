import React, { useState } from 'react'
import '../style/fullstack.css'
// import {Routes, Route, Link} from 'react-router-dom'
import First from '../minielements/First'
import Second from '../minielements/Second'
import Third from '../minielements/Third'
import Forth from '../minielements/Forth'
import Fifth from '../minielements/Fifth'

const FullstackProgram = () => {
  const[toggle,setToggle]=useState(1)

  const[view1,setView1]=useState(false)
  const[view2,setView2]=useState(false)
  const[view3,setView3]=useState(false)
  const[view4,setView4]=useState(false)
  const[view5,setView5]=useState(false)
  const[view6,setView6]=useState(false)
  const[view7,setView7]=useState(true)
  return (
    <div className='fullstack'>
          <div className='fullstack-first'>
              <div className='fullstack-first-inner'>
                   <div  className='fullstack-first-inner1'>
                    <div>
                    Partner with
                    <div className='fullstack-first-inner1-img-cont'>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/header-logo.svg' alt='not found' className='fullstack-first-inner1-img'/>
                    </div>
                    </div>
                    <p className='fullstack-first-inner1-text1'>
                    Learn Full Stack Web Development & Build Real World Projects using React & Node
                    </p>
                    <p className='fullstack-first-inner1-text2'>
                      Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.
                    </p>
                    <button className='fullstack-first-inner1-btn'> Download Syallabus</button>
                   </div>
                   <div  className='fullstack-first-inner2'>
                      <div className='fullstack-first-inner2-cont'>
                             <p className='fullstack-first-inner2-text1'>Next Batch starts: 1st May, 2023</p>
                             <p className='fullstack-first-inner2-text2'>Limited seats available</p>
                      </div>
                      <div className='fullstack-first-inner2-cont'>
                      <p className='fullstack-first-inner2-text1'>Program Duration: 4 - 5 months</p>
                             <p className='fullstack-first-inner2-text2'>15-20 hours/week</p>
                      </div>
                      <div className='fullstack-first-inner2-cont'>
                      <p className='fullstack-first-inner2-text1'>Learning Format</p>
                             <p className='fullstack-first-inner2-text2'>Recorded Lectures + Online Live Classes</p>
                      </div>
                   </div>
              </div>
          </div>

          <div className='fullstack-second'>
             <div className='fullstack-second-box1'>SELECT BATCH</div>
             
             <label className='fullstack-second-box' htmlFor='first-batch'>
             <input type='radio' name='batch' id='first-batch'/>
             <p className='fullstack-second-box-radio-text1'>1st May</p>
              <p className='fullstack-second-box-radio-text2'>Enrolment Started</p>
             </label>

             <label className='fullstack-second-box' htmlFor='second-batch'>
              <input type='radio' name='batch' id='second-batch'/>
             <p className='fullstack-second-box-radio-text1'>15th May</p>
             <p className='fullstack-second-box-radio-text2'>Enrolment Started</p>
             

             </label>
             <div className='fullstack-second-box2'>
              <p className='fullstack-second-box2-price'>₹ 30000</p>
              <div style={{width:"100%",display:'flex',columnGap:'5px'}}><button className='fullstack-second-box2-btn1'>Enroll Now</button> <button className='fullstack-second-box2-btn2'>Try for free</button></div>
             </div>
            
          </div>

          <div  className='fullstack-third'>
            <div   className='fullstack-third-cont1'>
               <p className='fullstack-third-cont1-text1'>Languages & Tools you will learn</p>
               <p className='fullstack-third-cont1-text2'>
                Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics
               </p>
            </div>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/tools1.png' alt='not found'  className='fullstack-third-img'/>
          </div>


          <div className='fullstack-forth'>
                   <div className='fullstack-forth-cont1'>
                    <p className='fullstack-forth-cont1-text1'>How will your journey look like?</p>
                    <p className='fullstack-forth-cont1-text2'>We have designed a unique program where you can learn Full stack & experience being a developer sitting at your home</p>
                   </div>

                   <div className='fullstack-forth-cont2'>
                    <div className='fullstack-forth-cont2-inner1' >
                     <div onClick={()=>setToggle(1)}  className={toggle===1?'fullstack-forth-cont2-inner1-btn-color':'fullstack-forth-cont2-inner1-btn'}><div className='circle1'><div className='circle2'>1</div></div>Batch Commencement</div> 
                     <div onClick={()=>setToggle(2)}  className={toggle===2?'fullstack-forth-cont2-inner1-btn-color':'fullstack-forth-cont2-inner1-btn'}> <div className='circle1'><div className='circle2'>2</div></div>Learn required languages, framework & tools</div> 
                     <div onClick={()=>setToggle(3)} className={toggle===3?'fullstack-forth-cont2-inner1-btn-color':'fullstack-forth-cont2-inner1-btn'}> <div className='circle1'><div className='circle2'>3</div></div>Complete awesome real world projects</div> 
                     <div onClick={()=>setToggle(4)} className={toggle===4?'fullstack-forth-cont2-inner1-btn-color':'fullstack-forth-cont2-inner1-btn'}> <div className='circle1'><div className='circle2'>4</div></div>Experience the complete development lifecycle</div> 
                     <div onClick={()=>setToggle(5)}  className={toggle===5?'fullstack-forth-cont2-inner1-btn-color':'fullstack-forth-cont2-inner1-btn'}> <div className='circle1'><div className='circle2'>5</div></div>Be a certified Full Stack Developer</div> 
                     
                    </div>
                    <div className='fullstack-forth-cont2-inner2'>
                      {toggle===1?<First/>:toggle===2?<Second/>:toggle===3?<Third/>:toggle===4?<Forth/>:toggle===5?<Fifth/>:'fifth'}
                       
                    </div>
                   </div>
                  
          </div>

          <div className='fullstack-fifth'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/girlimage.webp' alt='not found' className='fullstack-fifth-img'/>
            
            <div className='fullstack-fifth-cont'>
              <div className='fullstack-fifth-cont-box1'>
              What you will be after finishing the program?
              </div>
              <div className='fullstack-fifth-cont-box'>
                <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/certificate.svg' alt='not fonud' className='fullstack-fifth-cont-box-img'/>
                 <p className='fullstack-fifth-cont-box-text'>Certified Full stack Developer</p>
              </div>
              <div className='fullstack-fifth-cont-box'>
                <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/realtime.svg' alt='not found'/>
                <p className='fullstack-fifth-cont-box-text'>Experience of Real world work</p>
              </div>
              <div className='fullstack-fifth-cont-box'>
              <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/after-program/excellent.svg' alt='not found'/>
                <p className='fullstack-fifth-cont-box-text'>Ready to crack any web developer interview</p>
              </div>
            </div>
    
          </div>

          <div className='fullstack-eight'>
          <div className='fullstack-eight-cont1'>
                 <div className='fullstack-eight-cont1-inner1'>
                      <div className='fullstack-eight-cont1-inner1-cont1'>
                        <p className='fullstack-eight-cont1-inner1-cont1-text1'>Program Syllabus & Projects</p>
                        <p className='fullstack-eight-cont1-inner1-cont1-text2'>We have reverse engineered our syllabus by talking to the best companies and understanding what skills the industry needs the most right now.</p>
                      </div>
                      <div className='fullstack-eight-cont1-inner1-cont2'>Downlode Syllabus</div>
                 </div>
               
               
             </div>
             <div className='fullstack-eight-cont2'>
                 <div className='fullstack-eight-cont2-inner1'>
                      <div className='fullstack-eight-cont2-inner1-cont1'>
                        <p className='fullstack-eight-cont2-inner1-cont1-text1'>Web Development Basics - HTML, CSS, BootStrap</p>
                        <p className='fullstack-eight-cont2-inner1-cont1-text2'>Get to learn how websites work. Start your web development journey with the basics of HTML and learn how to create impressive websites using HTML, CSS, and Bootstrap.</p>
                        </div>
                      <div className='fullstack-eight-cont2-inner1-cont2'>week 1-2</div>
                 </div>
                 <div className={view1?'fullstack-eight-cont2-inner2-false':'fullstack-eight-cont2-inner2'}>
                      <p className='fullstack-eight-cont2-inner2-text1'>Course Content</p>
                     { view1?<button onClick={()=>setView1(false)} className='fullstack-eight-cont2-inner2-btn'>hide</button>:<button onClick={()=>setView1(true)} className='fullstack-eight-cont2-inner2-btn'>View Details</button>}
                 </div>
                 <div className='fullstack-eight-cont2-inner3' style={{height:view1?'auto':'0px',paddingTop:view1?'10vh':'0px',paddingBottom:view1?'10vh':'0px'}} >
                 <ul  className='unorder-list' style={{display:view1?'flex':'none'}}>
                    <li>How websites work</li>
                    <li>Web Development Overview - Advantages</li>
                    <li>HTML Introduction</li>
                    <li>Structure of Webpage</li>
                    <li>HTML Tags</li>
                    <li>Texts, Images, Videos</li>
                    <li>Lists, Forms, Tables</li>
                    <li>Links, Anchor tags</li>
                    <li>HTML Divs</li>
                    <li>CSS Introduction</li>
                    <li>Inline vs Internal vs External styling</li>
                    <li>CSS Display</li>
                    <li>CSS Font Styling, background, margin, padding</li>
                    <li>Styling Lists, Tables, Forms</li>
                 </ul>

                  <ul className='unorder-list' style={{display:view1?'flex':'none',transitionDelay:'1s'}}>
          <li>Web Development Overview - Advantages</li>
          <li>Structure of Webpage</li>
          <li>Texts, Images, Videos</li>
          <li>Links, Anchor tags</li>
          <li>Links, Anchor tags</li>
          <li>CSS Introduction</li>
          <li>CSS Display</li>
          <li>Styling Lists, Tables, Forms</li>
          <li>Transitionals, Transformations, Animations</li>
          <li>Tool tip, Box Sizing, Flex, Grid</li>
          <li>Bootstrap Tables,Images, Colors</li>
          <li>Bootstrap Spinners, Cards, Pagination, Drop Down</li>
        
                  </ul>

                 </div>
             </div>
             <div className='fullstack-eight-cont2'>
                 <div className='fullstack-eight-cont2-inner1'>
                      <div className='fullstack-eight-cont2-inner1-cont1'>
                        <p className='fullstack-eight-cont2-inner1-cont1-text1'>Javascript</p>
                        <p className='fullstack-eight-cont2-inner1-cont1-text2'>Deep dive into the world of Javascript, one of the commonly used languages for web development. Explore the basics of JS, promises, closures, and complete Javascript.</p>
                        </div>
                      <div className='fullstack-eight-cont2-inner1-cont2'>week 2-4</div>
                 </div>
                 <div className={view2?'fullstack-eight-cont2-inner2-false':'fullstack-eight-cont2-inner2'}>
                      <p className='fullstack-eight-cont2-inner2-text1'>Course Content</p>
                     { view2?<button onClick={()=>setView2(false)} className='fullstack-eight-cont2-inner2-btn'>hide</button>:<button onClick={()=>setView2(true)} className='fullstack-eight-cont2-inner2-btn'>View Details</button>}
                 </div>
                 <div className='fullstack-eight-cont2-inner3' style={{height:view2?'auto':'0px',paddingTop:view2?'10vh':'0px',paddingBottom:view2?'10vh':'0px'}} >
                 <ul  className='unorder-list' style={{display:view2?'flex':'none'}}>
                    <li>Introduction to Javascript</li>
                    <li>Strings and Numbers</li>
                    <li>Functions</li>
                    <li>Data Structures - List, Stack, Queues, Maps</li>
                    <li>Understanding and working with DOM</li>
                    <li>Prototypes</li>
                    <li>Browser Local Storage</li>
                    <li>Promises</li>
                    <li>Eventloop in Javascript</li>
                 </ul>

                  <ul className='unorder-list' style={{display:view2?'flex':'none',transitionDelay:'1s'}}>
          <li>Variables, scoping, Data type</li>
          <li>Operators and loops</li>
          <li>Arrays and Objects</li>
          <li>Hashing</li>
          <li>Developer tools in Browsers</li>
          <li>Closures</li>
          <li>Jquery, Ajax</li>
          <li>ES5 vs ES6 vs ES7</li>
  
                  </ul>

                 </div>
             </div>
             <div className='fullstack-eight-cont2'>
                 <div className='fullstack-eight-cont2-inner1'>
                      <div className='fullstack-eight-cont2-inner1-cont1'>
                        <p className='fullstack-eight-cont2-inner1-cont1-text1'>ReactJS</p>
                        <p className='fullstack-eight-cont2-inner1-cont1-text2'>Most of the websites getting built nowadays are using React, so why should you stay behind. Learn all the components of React, understand how React is better, and don't just learn, build amazing web apps using react.</p>
                        </div>
                      <div className='fullstack-eight-cont2-inner1-cont2'>week 5-7</div>
                 </div>
                 <div className={view3?'fullstack-eight-cont2-inner2-false':'fullstack-eight-cont2-inner2'}>
                      <p className='fullstack-eight-cont2-inner2-text1'>Course Content</p>
                     { view3?<button onClick={()=>setView3(false)} className='fullstack-eight-cont2-inner2-btn'>hide</button>:<button onClick={()=>setView3(true)} className='fullstack-eight-cont2-inner2-btn'>View Details</button>}
                 </div>
                 <div className='fullstack-eight-cont2-inner3' style={{height:view3?'auto':'0px',paddingTop:view3?'10vh':'0px',paddingBottom:view3?'10vh':'0px'}} >
                 <ul  className='unorder-list' style={{display:view3?'flex':'none'}}>
                    <li>React Intro</li>
                    <li>Create an app using create-react-app</li>
                    <li>Understanding JSX</li>
                    <li>React Lifecycle</li>
                    <li>Event handling, props</li>
                    <li>Routes</li>
                    <li>Pure Components</li>
                    <li>Babel, Webpack</li>
                    <li>SASS overview</li>
                 </ul>

                  <ul className='unorder-list' style={{display:view3?'flex':'none',transitionDelay:'1s'}}>
          <li>Node installation</li>
          <li>Understanding basics of react app</li>
          <li>Understanding virtual DOMS , Single page apps</li>
          <li>States, class components vs functional components</li>
          <li>Building forms in React</li>
          <li>Conditional Rendering</li>
          <li>High order components</li>
          <li>Redux</li>
          <li>Axios, Creating a mock server</li>
  
                  </ul>

                 </div>
             </div>
             <div className='fullstack-eight-cont2'>
                 <div className='fullstack-eight-cont2-inner1'>
                      <div className='fullstack-eight-cont2-inner1-cont1'>
                        <p className='fullstack-eight-cont2-inner1-cont1-text1'>NodeJs</p>
                        <p className='fullstack-eight-cont2-inner1-cont1-text2'>Always thinking about how to build servers? Its time to build one. Learn about express, security, authentication, restricting routes, hashing passwords, and JWT’s, and much more.</p>
                        </div>
                      <div className='fullstack-eight-cont2-inner1-cont2'>week 7-8</div>
                 </div>
                 <div className={view4?'fullstack-eight-cont2-inner2-false':'fullstack-eight-cont2-inner2'}>
                      <p className='fullstack-eight-cont2-inner2-text1'>Course Content</p>
                     { view4?<button onClick={()=>setView4(false)} className='fullstack-eight-cont2-inner2-btn'>hide</button>:<button onClick={()=>setView4(true)} className='fullstack-eight-cont2-inner2-btn'>View Details</button>}
                 </div>
                 <div className='fullstack-eight-cont2-inner3' style={{height:view4?'auto':'0px',paddingTop:view4?'10vh':'0px',paddingBottom:view4?'10vh':'0px'}} >
                 <ul  className='unorder-list' style={{display:view4?'flex':'none'}}>
                    <li>Creating a Simple Server</li>
                    <li>Routing</li>
                    <li>Intergrate Frontend and backend</li>
                    <li>Express Middleware</li>
                    <li>JWT Token,passport.js</li>
                   
                 </ul>

                  <ul className='unorder-list' style={{display:view4?'flex':'none',transitionDelay:'1s'}}>
          <li>Response type -HTML,JSON</li>
          <li>Express Introduction</li>
          <li>Express params and Query String</li>
          <li>Api Authentication</li>
          <li>Socket Programming</li>

  
                  </ul>

                 </div>
             </div>
             <div className='fullstack-eight-cont2'>
                 <div className='fullstack-eight-cont2-inner1'>
                      <div className='fullstack-eight-cont2-inner1-cont1'>
                        <p className='fullstack-eight-cont2-inner1-cont1-text1'>Databases - MongoDB</p>
                        <p className='fullstack-eight-cont2-inner1-cont1-text2'>Want to know how companies manage all their Data and how on a click of a button all the data is there? Don't just learn, master the concepts of Databases. Be a pro in managing data using MongoDB.</p>
                        </div>
                      <div className='fullstack-eight-cont2-inner1-cont2'>week 10</div>
                 </div>
                 <div className={view5?'fullstack-eight-cont2-inner2-false':'fullstack-eight-cont2-inner2'}>
                      <p className='fullstack-eight-cont2-inner2-text1'>Course Content</p>
                     { view5?<button onClick={()=>setView5(false)} className='fullstack-eight-cont2-inner2-btn'>hide</button>:<button onClick={()=>setView5(true)} className='fullstack-eight-cont2-inner2-btn'>View Details</button>}
                 </div>
                 <div className='fullstack-eight-cont2-inner3' style={{height:view5?'auto':'0px',paddingTop:view5?'10vh':'0px',paddingBottom:view5?'10vh':'0px'}} >
                 <ul  className='unorder-list' style={{display:view5?'flex':'none'}}>
                    <li>SQL vs NOSQL</li>
                    <li>Installing MongoDB</li>
                    <li>Deleting and updating Data</li>
                
                 </ul>

                  <ul className='unorder-list' style={{display:view5?'flex':'none',transitionDelay:'1s'}}>
          <li>MongoDB overview</li>
          <li>Connecting and Inserting Data</li>
          <li>Understanding CRUD operations</li>
         
  
                  </ul>

                 </div>
             </div>
             <div className='fullstack-eight-cont2'>
                 <div className='fullstack-eight-cont2-inner1'>
                      <div className='fullstack-eight-cont2-inner1-cont1'>
                        <p className='fullstack-eight-cont2-inner1-cont1-text1'>Code Review + Deployment</p>
                        <p className='fullstack-eight-cont2-inner1-cont1-text2'>Developers don't just write code, they write production level code. Learn how to write production-level code, deploy your projects, and flaunt it to the world.</p>
                        </div>
                      <div className='fullstack-eight-cont2-inner1-cont2'>week 11</div>
                 </div>
                 <div className={view6?'fullstack-eight-cont2-inner2-false':'fullstack-eight-cont2-inner2'}>
                      <p className='fullstack-eight-cont2-inner2-text1'>Course Content</p>
                     { view6?<button onClick={()=>setView6(false)} className='fullstack-eight-cont2-inner2-btn'>hide</button>:<button onClick={()=>setView6(true)} className='fullstack-eight-cont2-inner2-btn'>View Details</button>}
                 </div>
                 <div className='fullstack-eight-cont2-inner3' style={{height:view6?'auto':'0px',paddingTop:view6?'10vh':'0px',paddingBottom:view6?'10vh':'0px'}} >
                 <ul  className='unorder-list' style={{display:view6?'flex':'none'}}>
                    <li>Tools for Code review</li>
                    <li>Understanding Firebase</li>
                    <li>Deploy using Netlify and Github</li>
                    <li>Deploy all the projects</li>
                
                 </ul>

                  <ul className='unorder-list' style={{display:view6?'flex':'none',transitionDelay:'1s'}}>
          <li>Understand Review Board</li>
          <li>Github</li>
          <li>Get code review by Software Developers</li>
         
  
                  </ul>

                 </div>
             </div>
             <div className='fullstack-eight-cont2'>
                 <div className='fullstack-eight-cont2-inner1'>
                      <div className='fullstack-eight-cont2-inner1-cont1'>
                        <p className='fullstack-eight-cont2-inner1-cont1-text1'>Projects</p>
                        <p className='fullstack-eight-cont2-inner1-cont1-text2'>You will build 6+ projects during the whole program. Starting from building basic apps to bring your learning to the application, to building a real-world website that you can add in your resume or start your own business, you will do it all. The projects are carefully chosen by software developers for you.</p>
                        </div>
                      <div className='fullstack-eight-cont2-inner1-cont2'>week 3-16</div>
                 </div>
                 <div className={view7?'fullstack-eight-cont2-inner2-false':'fullstack-eight-cont2-inner2'}>
                      <p className='fullstack-eight-cont2-inner2-text1'>Course Content</p>
                     { view7?<button onClick={()=>setView7(false)} className='fullstack-eight-cont2-inner2-btn'>hide</button>:<button onClick={()=>setView7(true)} className='fullstack-eight-cont2-inner2-btn'>View Details</button>}
                 </div>
                 <div className='fullstack-eight-cont2-inner3-seventh' style={{height:view7?'auto':'0px',paddingTop:view7?'10vh':'0px',paddingBottom:view7?'10vh':'0px'}} >
                   <div className='fullstack-eight-cont2-inner3-cards' style={{display:view7?'flex':'none',transitionDelay:'1s'}}>
                       <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/HTML_HTML.svg' alt='not found' className='fullstack-eight-cont2-inner3-cards-img'/>
                       <p className='fullstack-eight-cont2-inner3-cards-text1'>HTML Blog Page</p>
                       <p className='fullstack-eight-cont2-inner3-cards-text2'>Start your web development by making a simple blog page using HTML.</p>
                   </div>
                   <div className='fullstack-eight-cont2-inner3-cards' style={{display:view7?'flex':'none',transitionDelay:'1s'}}>
                       <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/Clock.svg' alt='not found' className='fullstack-eight-cont2-inner3-cards-img'/>
                       <p className='fullstack-eight-cont2-inner3-cards-text1'>Reminder Clock App</p>
                       <p className='fullstack-eight-cont2-inner3-cards-text2'>Want to build an app to keep your reminders? Build your own Digital Reminder Clock App using HTML, CSS and JS.</p>
                   </div>
                   <div className='fullstack-eight-cont2-inner3-cards' style={{display:view7?'flex':'none',transitionDelay:'1s'}}>
                       <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_todo.svg' alt='not found' className='fullstack-eight-cont2-inner3-cards-img'/>
                       <p className='fullstack-eight-cont2-inner3-cards-text1'>ToDo App</p>
                       <p className='fullstack-eight-cont2-inner3-cards-text2'>This will be a basic project to make your understanding of HTML and CSS clear but you can use it to keep your ToDos as well.</p>
                   </div>
                   <div className='fullstack-eight-cont2-inner3-cards' style={{display:view7?'flex':'none',transitionDelay:'1s'}}>
                       <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_blog.svg' alt='not found' className='fullstack-eight-cont2-inner3-cards-img'/>
                       <p className='fullstack-eight-cont2-inner3-cards-text1'>React Blog App</p>
                       <p className='fullstack-eight-cont2-inner3-cards-text2'>Create your own Medium website. Through the project you will understand how React , Node and MongoDB work together to create magic.</p>
                   </div>
                   <div className='fullstack-eight-cont2-inner3-cards' style={{display:view7?'flex':'none',transitionDelay:'1s'}}>
                       <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/projects/app_shopping.svg' alt='not found' className='fullstack-eight-cont2-inner3-cards-img'/>
                       <p className='fullstack-eight-cont2-inner3-cards-text1'>E-commerce Web App</p>
                       <p className='fullstack-eight-cont2-inner3-cards-text2'>This will be one of the major projects of the program. It will be a full-fledged working website. Just add some products and you will be ready to sell online and take payments.</p>
                   </div>
                   

                 </div>
             </div>

          </div>
          <div className='fullstack-fifth'>
            
            <div className='fullstack-fifth-cont'>
              <div className='fullstack-fifth-cont-box1'>
              Get a real time project
              </div>
              <div className='fullstack-fifth-cont-box'>
                <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/real.svg' alt='not fonud' className='fullstack-fifth-cont-box-img'/>
                 <p className='fullstack-fifth-cont-box-text'>Get a real time project</p>
              </div>
              <div className='fullstack-fifth-cont-box'>
                <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/experience.svg' alt='not found'/>
                <p className='fullstack-fifth-cont-box-text'>Experience agile methodology & Work with industry experts</p>
              </div>
              <div className='fullstack-fifth-cont-box'>
              <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/real-time/deploy.svg' alt='not found'/>
                <p className='fullstack-fifth-cont-box-text'>Deploy your project to Production</p>
              </div>
            </div>
            <div className='fullstack-fifth-certificate'>
              <p>Certification</p>
              <p>Joint Co-Branded Participation Certificate & Partner Completion Certificate</p>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/nasscom-certificate-full-satck-mern.png' alt='not found' className='fullstack-fifth-certificate-img'/>

            </div>
    
          </div>
    </div>
  )
}

export default FullstackProgram
