/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className='m-48'>
            <Header></Header>
            <NavBar></NavBar>
            <Container >
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>   
                </Row>
            </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;