import React from 'react'
import Navbar from '../components/Navbar'
import LandingText from '../components/LandingText'
import SearchContainer from '../components/SearchContainer';
// import Texts from '../components/Texts'

const LandingPage = () => {
  return (
    <div className='containe landing'>

      <Navbar/>
      <LandingText/>
      <SearchContainer/>
      
    
      {/* <Texts text='Unlimited movies, TV shows, and more' style={{fontSize:'48px', fontWeight: 'bold', color: 'white'}}/> */}

    
    </div>
  )
};

export default LandingPage