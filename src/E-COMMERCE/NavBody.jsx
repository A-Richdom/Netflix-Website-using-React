import React from 'react';
import { Outlet } from 'react-router-dom';


const NavBody = () => {
  return (
    <div>
        <nav className='nav1'>
          <ul>
            <li><a href="">Voluxe</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Department</a></li>
            <input className='w-25 rounded-5 border' type="text" />
            <li><a href="">Orders</a></li>
            <li><a href="">Sign in</a></li>
            <li><a href="">Cart</a></li>
          </ul>
        </nav>

        <Outlet/>
        
    </div>
  );
}

export default NavBody;
