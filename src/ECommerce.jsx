import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import NavBody from './E-COMMERCE/NavBody';
import LandingPage from './E-COMMERCE/LandingPage';


const router = createBrowserRouter([
    {
        path:'/',
        element:< NavBody/>,
        children: [
            {
              index: true,
              element: <LandingPage/>,  
              // children: [
              //   {
              //     index: true,
              //     element: 'aboitttt'
              //   }
              // ]
            }
            
            

          

        ]
        
    }
]);
const ECommerce = () => {
  return (
    <div>
        <RouterProvider router={router}/>
        
        
    </div>
  )
}

export default ECommerce