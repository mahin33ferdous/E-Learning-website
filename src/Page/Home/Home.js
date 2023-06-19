import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Home/Home.css'
import Leftbar from '../../Component/Leftbar/Leftbar';
import AboutUS from '../../Component/AboutUs/AboutUS';

const Home = () => {
    return (
        <div>

                       <Carousel className='inner'>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src="https://forrit-one-msedu-p1-consumables.azureedge.net/media/de5eef6e-99b4-498a-95a0-80c724b340dc/03%20Computer%20Science%20in%20the%20School%20Curriculum%20Toolkit%20800x450.png"
          alt="First slide"
        />
        <Carousel.Caption className='caption'>
          <h3>Learn without limits with <span>E-learning</span></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src="https://www.codingdojo.com/blog/wp-content/uploads/learncodefaster-1280x720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='caption'>
        <h3>Learn without limits with <span>E-learning</span></h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    <AboutUS></AboutUS>
    <Leftbar></Leftbar>
        </div>
    );
};

export default Home;