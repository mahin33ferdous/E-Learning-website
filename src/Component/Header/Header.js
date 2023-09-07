import React, { useContext, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginModal from '../LoginMODAL/LoginModal';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Header/Header.css'


const Header = () => {
  const {user,LogOut}=useContext(AuthContext)
    const [show, setShow] = useState(false);
    const handleLogout=()=>{
      LogOut()
      .then(()=>{})
      .catch(error=>console.error(error))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
          <div className='header'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="/">E-Learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">FQA</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2}  href="#memes">
            {
                  user?.uid?
                  <>
                   <span>{user?.displayName}</span>
                   <Button variant="light" onClick={handleLogout}>Log Out</Button>
                  </> :
                    <Button variant="light" onClick={handleShow}>Log In</Button>
            }
              {user?.photoURL?
              <Image style={{height:'40px'}} roundedCircle src={user.photoURL}> 
              </Image> : 
              <FaUser></FaUser>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <LoginModal show={show}
     handleClose={handleClose}
     handleShow={handleShow}
    ></LoginModal>
  
        </div>
    );
};

export default Header;