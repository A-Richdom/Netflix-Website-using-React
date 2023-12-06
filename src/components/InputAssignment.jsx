import React from 'react'

const InputAssignment = ({label, type, placeholder}) => {

  return (
    <main className=' col-md-4 lh-lg'>

        <form className='col-lg-12 ms-5' action="">
            <label htmlFor="">{label}</label>
            <input className='form-control' type={type} placeholder={placeholder}/>
            <div></div>
        </form>

    </main>
  )
}

export default InputAssignment