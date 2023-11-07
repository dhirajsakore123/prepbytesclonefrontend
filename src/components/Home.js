import React, { useEffect, useState } from 'react'
import '../style/home.css'
import Main from '../logos/main.svg'
import axios from 'axios';

const Home = () => {
  const[data,setData]=useState('')
  console.log(data);
  useEffect(()=>{
    
    window.scrollTo(0,0)
    axios.get("https://prepbytesclone.onrender.com/api/mentordata")
    .then((res)=>setData(res.data.user))
    .catch((err)=>console.log(err))
  }, []);
  
  return (
    <div className='home-page'>

      <div className='know-more'>
         <div className='first-knowmore'>
              <div>
                <p className='first-line'>Start your journey of success</p>
                <p className='second-line'>Personalised Codding Programs to make coding easier for you</p>
                <p className='second-line'></p>
              </div>
              <div className='want-knowmore'>Want to know how PrepBytes can help you?</div>
              <button className='knowmore-btn'>Know More</button>
         </div>
         <div className='second-knowmore'><img src={Main} alt='not found' className='home-main-img'/></div>
      </div>
      
       <div className='tech-box'>
        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp' alt='not found' className='technologies'/>
        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp' alt='not found' className='technologies'/>
        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp' alt='not found' className='technologies'/>
        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp' alt='not found' className='technologies'/>
       </div>
      
       <div className='blue-strip'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
       
       <div className='mentorship-driven'>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg' alt='not found' className='mentorship-driven-img'/>
          <div className='mentorship-driven-content'>

            <div className='mentorship-driven-content-inner1'>
               <p className='mentorship-heading'>
                    How PrepBytes Mentorship driven Personalised Learning works?
               </p>
            </div>
            <div className='mentorship-driven-content-inner'>
              <div>
                  <p className='mentorship-para'>PERSONALISED LECTURES & WEEKLY PLAN</p> 
                   <div className='alpha'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_learning.svg' alt='not found' className='alpha-img'/>
                    Get learning videos & weekly plan based on your coding skills
                   </div>
              </div>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not found' className='mentorship-arrow'/>

            </div>
            <div className='mentorship-driven-content-inner3'>
                 <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not found' className='mentorship-arrow'/>
                 <div>
                  <p className='mentorship-para para2'>PERSONALISED CODING ASSIGNMENTS</p> 
                   <div className='alpha2'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/code_live_with_experts.svg' alt='not found' className='alpha-img'/>
                    Practice coding questions that adapts based on your progress
                   </div>
              </div>
            </div>
            <div className='mentorship-driven-content-inner'>
            <div>
                  <p className='mentorship-para para3'>DOUBT SOLVING BY CODING EXPERTS</p> 
                   <div className='alpha3'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/ask_doubts_totally_live.svg' alt='not found' className='alpha-img'/>
                    Getting Stuck While Coding? Get all your doubts resolved.
                   </div>
              </div>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not found' className='mentorship-arrow'/>

            </div>
            <div className='mentorship-driven-content-inner3'>
                 <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not found' className='mentorship-arrow'/>
                 <div>
                  <p className='mentorship-para para4'>CODE LIVE WITH TOP CODERS</p> 
                   <div className='alpha4'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_practice.svg' alt='not found' className='alpha-img'/>
                    Topic wise Live Coding sessions with top rated coders
                   </div>
              </div>
            </div>
            <div className='mentorship-driven-content-inner2'>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg' alt='not found' className='location-img'/>
            </div>
           
          </div>
       </div>

       <div className='iwantto-cards'>
        <p className='iwantto-heading'>I WANT TO</p>
        <div className='iwantto-card-cont'>
           <div className='home-iwantto-card'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp' alt='not found' className='iwantto-card-img'/>
            <p className='iwanttocard-text'>PREPARE FOR CAMPUS PLACEMENT</p>
            <div className='arrow-cont'>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNi41NyIgdmlld0JveD0iMCAwIDE3IDE2LjU3Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzAwYTVlYzsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KICA8L2RlZnM+DQogIDxwYXRoIGlkPSJmb3J3YXJkX2Fycm93IiBjbGFzcz0iY2xzLTEiIGQ9Ik03LjIyNSwxOC4xMDdsLjg0Mi44NDJhLjkwNy45MDcsMCwwLDAsMS4yODYsMGw3LjM3Ni03LjM3MmEuOTA3LjkwNywwLDAsMCwwLTEuMjg2TDkuMzUzLDIuOTE1YS45MDcuOTA3LDAsMCwwLTEuMjg2LDBsLS44NDIuODQyYS45MTIuOTEyLDAsMCwwLC4wMTUsMS4zbDQuNTcyLDQuMzU2SC45MDdBLjkwOC45MDgsMCwwLDAsMCwxMC4zMjV2MS4yMTRhLjkwOC45MDgsMCwwLDAsLjkxMS45MTFoMTAuOUw3LjI0LDE2LjgwNkEuOTA1LjkwNSwwLDAsMCw3LjIyNSwxOC4xMDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwNCAtMi42NDcpIi8+DQo8L3N2Zz4NCg==' alt='not found' />
            </div>
           </div>
            <div className='home-iwantto-card'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp' alt='not found' className='iwantto-card-img'/>
            <p className='iwanttocard-text1 '>MASTER COMPETITVE PROGRAMMING</p>
            <div className='arrow-cont'>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNi41NyIgdmlld0JveD0iMCAwIDE3IDE2LjU3Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzAwYTVlYzsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KICA8L2RlZnM+DQogIDxwYXRoIGlkPSJmb3J3YXJkX2Fycm93IiBjbGFzcz0iY2xzLTEiIGQ9Ik03LjIyNSwxOC4xMDdsLjg0Mi44NDJhLjkwNy45MDcsMCwwLDAsMS4yODYsMGw3LjM3Ni03LjM3MmEuOTA3LjkwNywwLDAsMCwwLTEuMjg2TDkuMzUzLDIuOTE1YS45MDcuOTA3LDAsMCwwLTEuMjg2LDBsLS44NDIuODQyYS45MTIuOTEyLDAsMCwwLC4wMTUsMS4zbDQuNTcyLDQuMzU2SC45MDdBLjkwOC45MDgsMCwwLDAsMCwxMC4zMjV2MS4yMTRhLjkwOC45MDgsMCwwLDAsLjkxMS45MTFoMTAuOUw3LjI0LDE2LjgwNkEuOTA1LjkwNSwwLDAsMCw3LjIyNSwxOC4xMDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwNCAtMi42NDcpIi8+DQo8L3N2Zz4NCg==' alt='not found' />
            </div>
            </div>
            <div className='home-iwantto-card'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp' alt='not found' className='iwantto-card-img'/>
            <p className='iwanttocard-text2 '>BUILD DEVELOPMENT PROJECTS</p>
            <div className='arrow-cont'>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNi41NyIgdmlld0JveD0iMCAwIDE3IDE2LjU3Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzAwYTVlYzsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KICA8L2RlZnM+DQogIDxwYXRoIGlkPSJmb3J3YXJkX2Fycm93IiBjbGFzcz0iY2xzLTEiIGQ9Ik03LjIyNSwxOC4xMDdsLjg0Mi44NDJhLjkwNy45MDcsMCwwLDAsMS4yODYsMGw3LjM3Ni03LjM3MmEuOTA3LjkwNywwLDAsMCwwLTEuMjg2TDkuMzUzLDIuOTE1YS45MDcuOTA3LDAsMCwwLTEuMjg2LDBsLS44NDIuODQyYS45MTIuOTEyLDAsMCwwLC4wMTUsMS4zbDQuNTcyLDQuMzU2SC45MDdBLjkwOC45MDgsMCwwLDAsMCwxMC4zMjV2MS4yMTRhLjkwOC45MDgsMCwwLDAsLjkxMS45MTFoMTAuOUw3LjI0LDE2LjgwNkEuOTA1LjkwNSwwLDAsMCw3LjIyNSwxOC4xMDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwNCAtMi42NDcpIi8+DQo8L3N2Zz4NCg==' alt='not found' />
            </div>
            </div>
        </div>
         
       </div>

      <div className='forth-compo'>
        <div className='forth-compo-inner'>
           <div className='forth-compo-inner1'>
                 <p className='forth-compo-heading'>
                 Are you an Experienced Professional willing to Switch?
                 </p> 
                 <div className='forth-compo-content'>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/industry_vetted_curriculum.svg' alt='not found' className='forth-compo-content-img'/>
                        INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU
                 </div>
                 <div className='forth-compo-content'>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/real_life_projects.svg' alt='not found' className='forth-compo-content-img'/>
                        REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK
                 </div>
                 <div className='forth-compo-content'>
                        <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/exclusive_placement.svg' alt='not found' className='forth-compo-content-img'/>
                        EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE
                 </div>
                 <div className='know-more-text-cont'>
                   <span style={{color: "black"}}> PrepBytes Elevation Academy </span> - 4 months Full Stack Program with Job Guarantee
                 </div>
                 <div className='know-more-btn-cont'>
                    <button className='knowmore-btn2'>Know more</button>
                 </div>
           </div>
           <div className='forth-compo-inner2'>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020(1st+Image).svg' alt='not found' style={{width:'120%'}}/>
           </div>
           <div className='forth-compo-inner2'>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/tools_for_2020.svg' alt='not found' style={{width:'120%'}}/>
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020_image_2.svg' alt='not found' style={{width:'120%'}}/>
           </div>
        </div>
      </div>


      <div className='fifth-compo'>
            <div className='fifth-compo-inner'>
               <div className='fifth-compo-card'>
                <div className='fifth-compo-card-img-cont'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png' alt='not found'/>
                </div>
                <p className='fifth-compo-card-des'>Mamta Kumari</p>
                <p className='fifth-compo-card-text'>Co-Founder PrepBytes</p>
                   <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png' alt='not found'/>
               </div>
               <div className='fifth-compo-description'>
                   <p className='fifth-compo-description-heading'>Attend Free sessions with industry experts and get valuable guidance</p>
                   <p className='fifth-compo-description-text'>How to master competitive coding?</p>
                   <button className='fifth-compo-knowmore-btn'>Konw more</button>
                   <hr/>
                   <p className='fifth-compo-description-text'>How to crack coding interviews?</p>
                   <button className='fifth-compo-knowmore-btn'>Konw more</button>


               </div>
            </div>

            <div className='fifth-compo-inner1'>
                 <div className='fifth-compo-inner1-cards'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg' alt='not found' />
                    <p className='fifth-compo-inner1-para'>100K+</p>
                    <p className='fifth-compo-inner1-text'>Coading Community</p>
                 </div>
                 <div className='fifth-compo-inner1-cards'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg' alt='not found' />
                    <p className='fifth-compo-inner1-para'>1000+</p>
                    <p className='fifth-compo-inner1-text'>Hours of Live session</p>
                 </div>
                 <div className='fifth-compo-inner1-cards'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg' alt='not found' />
                    <p className='fifth-compo-inner1-para'>10000K+</p>
                    <p className='fifth-compo-inner1-text'>Hours of learning</p>
                 </div>
                 <div className='fifth-compo-inner1-cards'>
                    <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg' alt='not found' />
                    <p className='fifth-compo-inner1-para'>700K+</p>
                    <p className='fifth-compo-inner1-text'>Doubts Solved</p>
                 </div>
            </div>
      </div>

      <div className='sixth-compo'>
              <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Bespoke+Mentors.webp' alt='not found' className='sixth-cont-img'/>
      </div>

     <div>
      <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/you_could_be_the(web_1366).png' alt='not found' width={'100%'}/>
     </div>
     <div className='home-mentor-heading'>
        <p>PrepBytes Mentors</p>
        <p>PrepBytes students get mentored by industry experts who have achieved in their careers and are passionate about helping students achieve their dream.</p>
     </div>

     <div className='home-mentor-data'>
           {
            data && data.map((item,index)=>{
              return(
                <div className='home-mentor-data-card' key={index}>
                      <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png' alt='not found' className='home-mentor-data-card-img'/>
                      <img src={item.profile} alt='not found' className='home-mentor-data-card-profile'/>
                      <p className='home-mentor-data-card-name'>{item.name}</p>
                      <p className='home-mentor-data-card-name1'>{item.company}</p>
                      <div className='home-mentor-data-card-description'>{item.description}</div>
                      <img src={item.companyimg} alt='not found' className='home-mentor-data-card-com-img'/>
                </div>
              )
            })
           }
     </div>

     <div className='home-collage-boy-img'>
      <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp' alt='not found' className='home-collage-boy-img-img'/>
       <div className='home-collage-boy-img-innerbox'>
       <p>Want to represent your college?</p>
       <p>Join PrepBytes Campus Business Manager Internship program.</p>
       <button>Join Now</button>
        </div>
     </div>

     <div className='home-last-three-cards'>
      <h1>Most Popular Blogs</h1>
      <div className='home-last-three-cards-cont'>
          <div className='home-last-three-cards-cont-card'>
                <img src='https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png' alt='not found'/>
                <p>Top 50 C Programming Interview Questions and Answers</p>
                <button>Read Now</button>
          </div>
          <div className='home-last-three-cards-cont-card'>
                <img src='https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_vinit_story.png' alt='not found'/>
                <p>Top 50 C Programming Interview Questions and Motivational Story : He got his first placement success after being rejected by 22 companies</p>
                <button>Read Now</button>
          </div>
          <div className='home-last-three-cards-cont-card'>
                <img src='https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png' alt='not found'/>
                <p>Lyrics from the famous track aptly describes the situation of every fresher when it comes to facing the interview</p>
                <button>Read Now</button>
          </div>
      </div>
     </div>

    </div>
  )
}

export default Home
