import React from 'react'
import Button from '../components/Button'

const SearchContainer = () => {
  
  const getStartedBtn = {
    backgroundColor: 'red',
    width: '45%',
    height: '60px',
    color: 'white',
    fontSize: '24px',
    padding: '8px'
  };

  return (
    <div className='container d-flex col-md-6 align-items-center justify-content-center gap-2'>

        <form className='d-flex w-75' action="">
            <input className='form-control' type="email" name="" id="emailInput" placeholder='Email address' />
        </form>
        

        <Button  test='Get Started' bgColor='' style={getStartedBtn}/>
        
    </div>
  )
}

export default SearchContainer