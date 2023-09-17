/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueeItem = () => {
    return (
        <div className='d-flex  bg-success p-6 mt-4 text-dark bg-opacity-25'>
                <Marquee speed={50} pauseOnHover={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, distinctio!.... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quo vitae similique accusantium error. Fuga eaque ut molestias velit harum!
                </Marquee>
            </div>
    );
};

export default MarqueeItem;