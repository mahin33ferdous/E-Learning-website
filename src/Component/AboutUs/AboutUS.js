import React from 'react';

import { Button } from 'react-bootstrap';
import '../AboutUs/AboutUs1.css'

const AboutUS = () => {
    return (
        <div className='about'>
        <h1>About us</h1>
        <div className='aboutContainer'>
            <div className='con-details'>
            <h2>welcome to us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        <Button className='btn1'>Learn More</Button>
            </div>
          
        <div className='aboutImg'>
            <img src='https://digitallearning.eletsonline.com/wp-content/uploads/2017/07/News-3-1.jpg'/>
        </div>
        </div>
       
    </div>
    );
};

export default AboutUS;