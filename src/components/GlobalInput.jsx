import React from 'react'

const GlobalInput = ({label, type, name, placeholder, getInputVal}) => {

  return (
    <div>
        <label htmlFor={label}>{name}</label>
        <input onChange={getInputVal} type={type} name={name} placeholder={placeholder}/>

        {/* <p>{display}</p> */}

    </div>
  )
}

export default GlobalInput