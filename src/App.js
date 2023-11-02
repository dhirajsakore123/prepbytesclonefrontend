import React from 'react'
import Navbar from './routing/Navbar'
import '../src/style/Nav.css'
import '../src/style/footer.css'
import Routing from './routing/Routing'
import Footer from './routing/Footer'

const App = () => {
  return (
    
    <div>
      <div className='nav-container'>
          <Navbar/>      
      </div>
     <div className='home-main'>
      <div className='mid-cont'>
        <Routing/>
      </div>

     <div className='footer'>
      <Footer/>
     </div>
</div>     
    </div>
  )
}

export default App

