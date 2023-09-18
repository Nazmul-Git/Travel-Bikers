/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import HeaderNav from '../Shared/HeaderNav';

const Main = () => {
    return (
        <div className='m-48'>
            <HeaderNav></HeaderNav>
            <Container>
                <Row>
                    <Col sm={4}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col sm={8}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;