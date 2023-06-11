import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Category1 = ({category}) => {
    const {id,name}=category;
    return (
        <div>
            <p></p>
            <Card style={{ width: '18rem' }} className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">
        <Link to={`/category/${category.id}`}>See Courses</Link>
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </div>
    );
};

export default Category1;