/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";
import biker1 from '../../src/assets/biker1.jpg';
import biker2 from '../../src/assets/biker2.jpg';
import biker3 from '../../src/assets/biker3.jpg';
import biker4 from '../../src/assets/biker4.jpg';
import biker5 from '../../src/assets/biker5.jpg';
const MarqueeItem = () => {
    return (
        <div className='d-flex p-20 text-dark bg-opacity-25 ml-28 mr-28'>
            <Marquee speed={60} pauseOnHover={true}>
                <div className=' shadow-md shadow-orange-700  flex gap-8 p-2'>
                    <div className=' h-56 w-62'><img className='h-56 w-56 rounded-xl' src={biker1}  alt="biker1" /></div>
                    <div className=' h-56 w-62'><img className='h-56 w-56 rounded-xl' src={biker2}  alt="biker1" /></div>
                    <div className=' h-56 w-62'><img className='h-56 w-56 rounded-xl' src={biker3}  alt="biker1" /></div>
                    <div className=' h-56 w-62'><img className='h-56 w-56 rounded-xl' src={biker4}  alt="biker1" /></div>
                    <div className=' h-56 w-62'><img className='h-56 w-56 rounded-xl' src={biker5}  alt="biker1" /></div>

                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeItem;