import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [error,setError]=useState('')
    const {createUser}=useContext(AuthContext)
    const navigate=useNavigate();
    const handleSubmit=event=>{
        event.preventDefault();
        
        const form=event.target;
        const name=form.name.value;
        const photourl=form.photourl.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photourl,email,password);

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            setError('')
            form.reset();
            navigate('/')
           
        }).catch(e=>{
            setError(e.message)
            
          })
    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your Name</Form.Label>
      <Form.Control name="name" type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your photo url</Form.Label>
      <Form.Control name="photourl" type="text" placeholder="" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" type="password" placeholder="Password" required />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <Form.Text className="text-danger">
     {error}
      </Form.Text>
  </Form>
    );
};

export default Register;