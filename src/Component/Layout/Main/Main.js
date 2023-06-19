import React from 'react';
import Header from '../../Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Leftbar from '../../Leftbar/Leftbar';
import Footer from '../../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;