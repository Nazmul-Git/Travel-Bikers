/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const DashBoard = ({ user }) => {
    // eslint-disable-next-line react/prop-types
    const { name, age, contact, email, _id, file } = user;
    return (
        <div className='ml-72 p-4 m-4 bg-slate-50 shadow-md shadow-white'>
            <div className='p-2 ml-10'>
                <div className='font-extrabold text-black'>
                    <h3>Name : {name}</h3>
                    <h4>Age : {age}</h4>
                </div>
                <div className=' font-bold text-black'>
                    <h4>Mobile : {contact}</h4>
                    <p>Email : {email}</p>
                </div>
            </div>
            <div>
                <img src={file} alt="" />
            </div>
        </div>
    );
};

export default DashBoard;