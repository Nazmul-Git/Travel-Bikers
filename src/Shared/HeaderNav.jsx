/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MarqueeItem from '../Design/MarqueeItem';

const HeaderNav = () => {
    return (
        <div className='sticky top-20 z-50'>
            <Header></Header>
            <NavBar></NavBar>
            <MarqueeItem></MarqueeItem>
        </div>
    );
};

export default HeaderNav;