import React, { useState } from 'react'
import  './App.css'
import LandingPage from './components/LandingPage'
import HeroPage1 from './components/HeroPage1'
import HeroPage2 from './components/HeroPage2'


const App = () => {
  
  return (
    <div className='App'>

      <LandingPage/>
      <HeroPage1/>
      <HeroPage2/>

    </div>
  )
}

export default App