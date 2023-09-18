/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Place = () => {
    const prms = useLoaderData();
    console.log(prms);
    const { details, placeName, title, date, id } = prms;

    return (
        <div className='ml-48 mt-48'>
            <div className="carousel w-auto ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={details.thumbUrl1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={details.thumbUrl2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='m-10 '>
                <h2>{placeName}</h2>
                <p>{title}</p>
                <p>{date}</p>
            </div>

        </div>
    );
};

export default Place;