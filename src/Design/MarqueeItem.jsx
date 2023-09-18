/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueeItem = () => {
    return (
        <div className='d-flex bg-slate-700 p-20 text-dark bg-opacity-25 ml-48'>
                <Marquee speed={50} pauseOnHover={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, distinctio!.... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quo vitae similique accusantium error. Fuga eaque ut molestias velit harum!
                </Marquee>
            </div>
    );
};

export default MarqueeItem;