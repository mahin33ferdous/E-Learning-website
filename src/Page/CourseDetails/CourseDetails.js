import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../CourseDetails/CourseDetails.css'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faHourglass, faInfinity, faMobile, faPager, faTimes, faTv, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

const CourseDetails = () => {
    const courseDetail=useLoaderData()
    const{title,_id,title2,rating,price,total_view,author,language,details,content}=courseDetail
    console.log(courseDetail)
    
    return (
        <div>
            <div className='cheader1'>
                <div className='Course-header'>
                <h1>{title}</h1>
              
              <p>{title2}</p>
               </div>
                <div className='courdse-header-info'>
                    <p>{rating.number}</p>
                    <p><span>&#40;</span>{rating.vote} rattings<span>&#41;</span></p>
                    <p>{total_view}</p>
                </div>
                <div className='course-header-other'>
                <p >created by : <span className='author-name'>{author.name}</span></p>
                <p>Published : {author.published_date}</p>
                <p>Language : {language}</p>
                
                </div>
             <div>
             <p>Price: {price}</p>
             </div>
              <Link className='btn1 enrollbtn' to='/enroll'>Sign Up to Enroll</Link>
        </div>
        <div className='course-body'>
            <div className='course-content ps-3 mb-5 mt-5'>
                       <h1>Content:</h1>
                      <p><FontAwesomeIcon icon={faHourglass}/> {content.Hours}  hours on-demand video </p>
                      <p><FontAwesomeIcon icon={faPager}/> {content.article}  articles</p>
                      <p><FontAwesomeIcon icon={faTv}/> {content.lecture}  lectures</p>
                      <p><FontAwesomeIcon icon={faTimes}/> {content.time}</p>
                      <p> <FontAwesomeIcon icon={faMobile} />  Access on mobile and TV</p>
                      <p><FontAwesomeIcon icon={faInfinity} />  Full lifetime access</p>
                      <p><FontAwesomeIcon icon={faCertificate} />  Certificate of completion</p>
                    
                           
                       </div>
                <div className='course-discreption'>
                    <h1>Description :</h1>
                    <p>{details} </p>
                </div>
           
        </div>
        </div>
    );
};

export default CourseDetails;