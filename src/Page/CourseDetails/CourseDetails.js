import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetail=useLoaderData()
    const{title,_id}=courseDetail
    console.log(courseDetail)
    return (
        <div>
            <div className=''>
              <h2>{title}</h2>
              
              <p>rating:{_id}</p>
        </div>
        </div>
    );
};

export default CourseDetails;