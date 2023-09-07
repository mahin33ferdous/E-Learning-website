import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {

    const {LogIn}=useContext(AuthContext)
    const[error,setError]=useState('')
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/' ;
    const handleLogIn =event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        LogIn(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          form.reset()
          setError('')
          navigate(from,{replace : true})
          
          form.reset();
        }).catch(error=>{
            console.error(error)
            setError(error.message)
         })

    }

    return (
        <Form onSubmit={handleLogIn}>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
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

export default Login;