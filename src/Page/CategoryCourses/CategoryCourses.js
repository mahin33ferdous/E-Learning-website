import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Component/CourseCard/CourseCard';
import { Col, Container, Row } from 'react-bootstrap';
import '../CategoryCourses/CategoryCourses.css'

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

             <Container fluid>
            <Row>
                <Col lg='2'>
                    
                </Col>
                <Col lg='7'>
                  <div className='card-container'>
                    

             {
                Ccourses.map(Cc=><CourseCard
                key={Cc._id}
                Cc={Cc}
                ></CourseCard>)
             }
                          
   
     
   </div>
               </Col>
               <Col  lg='2'>
               <h3>kkk</h3>
               </Col>
           </Row>
       </Container>
        </div>
    );
};

export default CategoryCourses;