import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Leftbar/Leftbar.css'
import Category1 from '../Category/Category1';


const Leftbar = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5001/category')
        .then(res=>res.json())
        //.then(data=>console.log(data))
        .then(data=>setCategories(data))
    },[])

    return (
        <div>
            <div className='wrapper'>
      <h1>Domain</h1>
            <div className='container'>
            {
                    categories.map(category=><Category1 key={category.id}
                                                        category={category}
                    ></Category1>)}
            </div>
           
        </div>
        </div>
    );
};

export default Leftbar;