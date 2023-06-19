import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import '../CourseCard/CourseCard.css'
import { Link } from 'react-router-dom';

const CourseCard = ({Cc}) => {
    const{title,rating}=Cc;
    return (
       
        <Container fluid>
            <Row>
                <Col lg='2'>
                    
                </Col>
                <Col lg='7'>
                <Card>
      <Card.Header as="h5">What you will learn </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        
        <Link className='btn1' to={`/courses/${Cc._id}`}>See Details</Link>
        
      </Card.Body>
    </Card>
                </Col>
                <Col  lg='2'>
                <h3>kkk</h3>
                </Col>
            </Row>
        </Container>
        
    );
};

export default CourseCard;