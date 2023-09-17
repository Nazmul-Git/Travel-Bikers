/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="flex justify-around mt-8">
            <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            <div className='flex gap-6'>
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

    );
};

export default NavBar;