/* eslint-disable no-unused-vars */

import React from 'react';
import NavBar from './NavBar';
import image from '../assets/bikes.jpg'

const HeaderNav = () => {
    return (
        <div className="sticky top-0 z-50 bg-center bg-no-repeat bg-cover " style={{
            
            backgroundImage:`url(${image})`
            }}>
            <NavBar></NavBar>
        </div>
    );
};

export default HeaderNav;