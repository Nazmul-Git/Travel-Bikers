/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className=' fixed top-76 rounded-md mb-10 bg-gray-800'>
            {
                categories.map(category => <div className='text-xl font-bold m-2 p-2 text-green-500' key={category.id} >
                    <Link to={`/categories/${category.id}`} >
                        <span className='flex gap-2 items-center'>
                            <FaLocationArrow></FaLocationArrow>
                            {category.categoryName}
                        </span>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default LeftNav;