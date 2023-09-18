/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiMotorbikeFill } from "react-icons/Ri";
import { AuthContext } from '../Provider/authProvider';
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const {user,userLogOut}=useContext(AuthContext);
    const handleLogOut=()=>{
        userLogOut()
        .then()
        .catch(error=>console.log(error.message))
    }
    return (
        <div className=''>
            <div className="flex justify-around items-center rounded-lg mt-8 text-4xl font-sans font-bold shadow-xl shadow-orange-300 p-3 ">
                <Link className="text-xl"><RiMotorbikeFill className='h-20 w-20 text-blue-700'></RiMotorbikeFill></Link>
                <div className='flex gap-16'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div className='flex items-center gap-4'>
                    {
                        user &&
                        <FaUserCircle className=' font-bold text-4xl'></FaUserCircle>
                    }
                    {  user ?
                        <button onClick={handleLogOut}>Logout</button>:
                        <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
            
        </div>

    );
};

export default NavBar;