import React from 'react'
import { useState } from 'react'


const Hooks = () => {
  //USE STATE FUNCTION
  const [name, setName] = useState('OLALEKAN');
  const [count, setCount] = useState(0);


  //FUNCTIONAL COMP...
  const handleNameChange = () => {
    const names = ['ANIGILAJE', 'RIDWAN', 'OLALEKAN'];
    const int = Math.floor(Math.random() * 3)

    setName(names[int]);
  };

  //CLICKED EVENT...
  const handleClick = () => {
    console.log('you clicked');
  }

  const handleUse = () => {
    setCount(count + 1)
    console.log(count);
  }

  const handleClick2 = (name) => {
    console.log(`${name} clicked it`);
  }

  const handleClick3 = (e) => {
    console.log(e.target);
  }
  return (
    <main>

      <p>HELLO {name}</p>
       
      <button className='btn btn-danger' onClick={handleNameChange}>CLICK CHANGE</button>  
      <br/>
      <button className='btn btn-primary' onClick={handleUse}>CLICK USE</button>

       <button onClick={handleClick}>CLICK</button>

       <button onClick={() => handleClick2('OLA')}>CLICK</button>

       <button onClick={(e) => handleClick3(e)}>CLICK</button>


    </main>
  )
}

export default Hooks