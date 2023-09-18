/* eslint-disable no-unused-vars */

import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MarqueeItem from '../Design/MarqueeItem';

const HeaderNav = () => {
    return (
        <div className='sticky top-0 z-50 bg-black'>
            <Header></Header>
            <NavBar></NavBar>
        </div>
    );
};

export default HeaderNav;