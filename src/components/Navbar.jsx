import React from 'react'
import netflixLogo from '../assets/newLogo.png'
import Button from '../components/Button'

const Navbar = () => {

    const navBarStyle = {
        // backgroundColor: 'black',
        width: '100%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '-8px',
        padding: '0',
        justifyContent: 'space-between'   
    };

    const imgStyle = {
        height: '100px',
       alignItems:'center'
    };


  return (
    <div style={navBarStyle}>
            
            <img className='' style={imgStyle} src={netflixLogo} alt="newLogo"/>
            
            <Button test='Sign Up' bgColor='' style={{backgroundColor: 'red', color: 'white'}} />
    
    </div>
  )
};

export default Navbar