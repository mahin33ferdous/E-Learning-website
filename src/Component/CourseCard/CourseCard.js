import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import '../CourseCard/CourseCard.css'
import { Link } from 'react-router-dom';

const CourseCard = ({Cc}) => {
    const{title,rating,image_url}=Cc;
    return (
       
        
                    <Card className='mb-5 cardbox' style={{ width: '34rem' }}>
      <Card.Header as="h5">What you will learn </Card.Header>
      <Card.Img variant="top" src={image_url}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        
        <Link className='btn1' to={`/courses/${Cc._id}`}>See Details</Link>
        
      </Card.Body>
    </Card>
       
        
    );
};

export default CourseCard;