/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderNav from '../Shared/HeaderNav';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import About from '../Pages/About';

const AboutLayout = () => {
    return (
        <div className='ml-48 mr-48 shadow-xl shadow-slate-300'>
            <HeaderNav></HeaderNav>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={9}>
                        <About></About>
                    </Col>   
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AboutLayout;