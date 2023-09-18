/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import HeaderNav from '../Shared/HeaderNav';
import MarqueeItem from '../Design/MarqueeItem';



const Main = () => {
    return (
        <div className='ml-48 mr-48 shadow-xl shadow-slate-300'>
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
            <MarqueeItem></MarqueeItem>
            <Footer></Footer>

        </div>
    );
};

export default Main;