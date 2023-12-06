
import  './App.css'
import LandingPage from './components/LandingPage'
import HeroPage1 from './components/HeroPage1'
import HeroPage2 from './components/HeroPage2'
import Hooks from './components/Hooks'
import UseRef from './components/UseRef'
import GlobalInput from './components/GlobalInput'
import { useState } from 'react'
import InputAssignment from './components/InputAssignment'
import UseEffectFetching from '../../ANIGILAJE/src/components/UseEffectFetching'

// import ListAndKeys from './components/ListAndKeys'



const App = () => {

  return (
    <main className='App lh-lg'>

      <LandingPage/>
      <HeroPage1/>
      <HeroPage2/>

      <br/>
      <br/>

      <Hooks/>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <UseRef/>



      {/* <ListAndKeys/> */}

      {/* ASSIGNMENT */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className='border rounded-3  ms-5 '>

        <InputAssignment 
            label="Name:"
            type="text"
            placeholder="Enter Name"
        />
        <InputAssignment 
            label="Email:"
            type="email"
            placeholder="Enter your Email"
        />
        <InputAssignment 
            label="Password:"
            type="Password"
            placeholder="Enter correct Password"
        />
        <InputAssignment 
            
            type="submit"
            placeholder="Name"
        />
      </div>

      
      <UseEffectFetching/>

    </main>
  )
}

export default App