import React from 'react'
import { useState } from 'react';

const Button = ({bgColor,test,style}) => {


  
  return (
    
        <button className={`btn btn-${bgColor}`} style={style}>{test}</button>
    
  )
};

export default Button