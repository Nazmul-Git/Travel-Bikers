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
        <div>
            {
                categories.map(category=><p key={category.id} >
                    <Link to={`/categories/${category.id}`}>{category.categoryName}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;