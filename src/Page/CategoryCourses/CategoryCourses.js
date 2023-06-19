import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Component/CourseCard/CourseCard';

const CategoryCourses = () => {
    const Ccourses=useLoaderData()
    console.log(Ccourses)
    return (
        <div>
            
        <div className='cheader'>
              <h2>Course name</h2>
              <p>hujbbbbbbbbbbbbbbbbbbbbbbghvhvhgvhbvhvbhbvh</p>
              <p>price</p>
        </div>
             <h2>l : {Ccourses.length}</h2>
             {
                Ccourses.map(Cc=><CourseCard
                key={Cc._id}
                Cc={Cc}
                ></CourseCard>)
             }
        </div>
    );
};

export default CategoryCourses;