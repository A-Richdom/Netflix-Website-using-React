import React, { useRef } from 'react'

const UseRef = () => {
    const inpRef = useRef()
    const divRef = useRef()

    function handleRefClick() {
        console.log(inpRef.current.value);
        divRef.current.style.backgroundColor = 'red'
    }


  return (
    <div>
        <input type="text" ref={inpRef}/>
        <button onClick={handleRefClick}>CLICK USEREF</button>

        <div ref={divRef} className='test'>
            <h1 id='h1Tag'>Hellllloo</h1>
        </div>
    </div>
  )
}

export default UseRef