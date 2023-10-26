import React from 'react'
import '../style/home.css'
import Main from '../logos/main.svg'

const Home = () => {
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
       <div></div>
    </div>
  )
}

export default Home
