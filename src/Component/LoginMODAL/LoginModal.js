import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../LoginMODAL/LoginModal.css'
import { FaFacebook,FaGithub,FaGoogle,FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const LoginModal = (props) => {
    const{show,handleClose}=props
    const {providerGoogleLogin}=useContext(AuthContext)
    const googleProvider=new GoogleAuthProvider();
    const handleGoogle=()=>{
      providerGoogleLogin(googleProvider)
      .then(r=>{
        const user=r.user;
        console.log(user);
      })
      .catch(error=>console.error(error))
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className='Modal_header' >
          <Modal.Title className='Modal_title'>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body><div> 
        <ListGroup>
      <ListGroup.Item onClick={handleGoogle} className='mb-2'> <FaGoogle></FaGoogle> Google</ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaGithub></FaGithub> Github</ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
    
    </ListGroup>
              </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          <Link to='/login'>Log In</Link>
          </Button>
          <Button variant="secondary" onClick={handleClose}>
          <Link to='/register'>Register</Link>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default LoginModal;