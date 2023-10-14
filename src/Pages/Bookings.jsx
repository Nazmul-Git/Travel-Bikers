/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DashBoard from './DashBoard';

const Bookings = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/bookings')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUsers(data);
        })
    },[])
    return (
        <div>
            {
                users.map(user=><DashBoard key={user._id} user={user}></DashBoard>)
            }
        </div>
    );
};

export default Bookings;
