/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/authProvider';
import { FaUserCircle } from "react-icons/fa";
import logo from '../assets/logo.png';



const NavBar = () => {

    const { user, userLogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        userLogOut()
            .then()
            .catch(error => console.log(error.message))
    }
    return (
        <div className=' backdrop-blur-sm'>
            <div className='text-center font-sans '>
                <h2 className=' font-extrabold text-shadow-default  text-8xl p-2 mt-2 text-orange-600 '>Travel-Bikers</h2>
                <small className='text-xl text-orange-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
            </div>
            <div className="flex justify-between items-center text-orange-600 mt-2 pl-8 pr-8 text-3xl font-sans font-bold shadow-xl shadow-orange-300 p-3 ">
                <img src={logo} className=' h-40 w-40'></img>
                <div className='flex gap-16'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/bookings'>Bookings</Link>
                </div>
                <div className='flex items-center gap-4'>
                    {
                        user &&
                        <FaUserCircle className=' font-bold text-4xl'></FaUserCircle>
                    }
                    {user ?
                        <button onClick={handleLogOut}>Logout</button> :
                        <Link to='/login'>Login</Link>
                    }
                </div>
            </div>

        </div>

    );
};

export default NavBar;