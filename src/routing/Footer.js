import React from 'react'
import Facebook from '../logos/facebook.svg'
import Instagram from '../logos/instagram.svg'
import Linkdin from '../logos/linkdin.svg'
import YouTube from '../logos/youtube.svg'

const Footer = () => {
  return (
    <div className='inner-footer'>
         <div className='inner-footer1'>
             <div className='footer-innerbox'>
                 <div className='follow-us'>
                    <p className='followus-text'>FOLLOW US</p> 
                    <div className='socal-cont' >
                     <img src={Facebook} alt='not found' className='socals-img'/> 
                     <img src={Instagram} alt='not found' className='socals-img'/> 
                     <img src={Linkdin} alt='not found' className='socals-img'/> 
                     <img src={YouTube} alt='not found' className='socals-img'/> 
                      </div> 
                 </div>
                 <div className='follow-us'>
                    <p className='followus-text'>CONTACT US</p> 
                  
                 </div>
                 <div>

                 </div>
             </div>

             <div className='footer-innerbox1'>
                <div className='follow-us'>
                   <p className='followus-text'>LATEST ARTICLES</p>
                   <div className='interview-que'>
                    <div className='que-cat'>Tech Mahindra Interview Questions</div>
                    <div className='que-cat'>CPP Interview Questions</div>
                    <div className='que-cat'>Angular Innterview Questions</div>
                    <div className='que-cat'>Cal Command in Linux with Examples</div>
                    <div className='que-cat'>Head Command Linux Example</div>
                   </div> 
                 </div>
                 <div className='follow-us'>
                   <p className='followus-text'>POPULAR ARTICLES</p>
                   <div className='interview-que'>
                    <div className='que-cat'>GIT Interview Questions and Answers</div>
                    <div className='que-cat'>Automation Testing Interview Questions</div>
                    <div className='que-cat'>Cloud Computing Interview Questions</div>
                    <div className='que-cat'>Django Interview Questions</div>
                    <div className='que-cat'>MongoDB Interview Questions</div>
                   </div> 
                 </div>
             </div>

             <div className='footer-innerbox'>
             <div className='follow-us'>
                   <p className='followus-text'>QUICK LINKS</p>
                   <div className='interview-que'>
                    <div className='que-cat'>Interview Notes</div>
                    <div className='que-cat'>Placement Programs</div>
                    <div className='que-cat'>Coading Courses</div>
                    <div className='que-cat'>About Us</div>
                    <div className='que-cat'>Projects</div>
                   </div> 
                 </div>
             </div>
         </div>
         <div className='inner-footer2 flex'>
            <div className='footer-copywrites'>Copyright©2023</div>
            <div className='footer-policy'>
              <div>Privacy Policy</div>
              <div>Refund Policy</div>
              <div>Terms of Use</div>
            </div>
         </div>
    </div>
  )
}

export default Footer
