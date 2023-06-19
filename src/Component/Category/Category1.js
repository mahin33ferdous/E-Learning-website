

import React from 'react';

import html from '../../images/ai.jpg'
import ME from '../../images/M.jpg'
import sd from '../../images/s.jpg'
import D from '../../images/d.jpg'
import C from '../../images/c.jpg'
import CN from '../../images/cn.jpg'
import '../Category/Category.css'
import { Link } from 'react-router-dom';
const Category1 = ({category}) => {
    const {img,id,name}=category;
    return (
     
      
          <div className='card'>
              
             
          <div className='image-sec'>
                        <img src={img}/>
                  </div>
                  <div className='card-details'>
             <h4>{name}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                
                <Link className='btn1' to={`/category/${category.id}`}>See All Courses</Link>
             </div>
              
          </div>
          
          
    );
};

export default Category1;