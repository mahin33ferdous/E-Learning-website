import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../LoginMODAL/LoginModal.css'
import { FaFacebook,FaGithub,FaGoogle,FaInstagram, FaTwitter } from "react-icons/fa";

const LoginModal = (props) => {
    const{show,handleClose}=props
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className='Modal_header' >
          <Modal.Title className='Modal_title'>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body><div> 
        <ListGroup>
      <ListGroup.Item className='mb-2'> <FaGoogle></FaGoogle> Google</ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaGithub></FaGithub> Github</ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
    
    </ListGroup>
              </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default LoginModal;