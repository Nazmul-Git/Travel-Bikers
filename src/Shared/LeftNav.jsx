/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='fixed mt-56 top-96'>
            {
                categories.map(category=><div className='text-xl font-bold m-2 p-2' key={category.id} >
                    <Link to={`/categories/${category.id}`} >{category.categoryName}</Link>
                </div>)
            }
        </div>
    );
};

export default LeftNav;