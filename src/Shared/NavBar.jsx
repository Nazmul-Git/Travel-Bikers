/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { RiMotorbikeFill } from "react-icons/Ri";
import MarqueeItem from '../Design/MarqueeItem';

const NavBar = () => {
    return (
        <div className='sticky top-56 z-50'>
            <div className="flex justify-around items-center rounded-lg mt-8 text-4xl font-sans font-bold shadow-xl shadow-orange-300 p-3 ">
                <Link className="text-xl"><RiMotorbikeFill className='h-20 w-20 text-blue-700'></RiMotorbikeFill></Link>
                <div className='flex gap-16'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div>
                    {
                        <Link>Login</Link>
                    }
                </div>
            </div>
            <MarqueeItem></MarqueeItem>
        </div>

    );
};

export default NavBar;