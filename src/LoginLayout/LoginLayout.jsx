/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../Shared/NavBar';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../Shared/HeaderNav';
import Footer from '../Shared/Footer';

const LoginLayout = () => {
    return (
        <div className='ml-48 mr-48'>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;