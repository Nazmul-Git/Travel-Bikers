/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FcBookmark, FcShare } from "react-icons/fc";
import { FaRegStar, FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PlaceCard = ({ place }) => {
    const { title, placeName, imageUrl, Rating, date, id } = place;
    return (
        <div className="card card-side bg-base-100 shadow-xl m-6 flex justify-between gap-20 ">             
            <div className=''>
                <figure><img className='p-3 h-72 w-96 ' src={imageUrl} alt="Movie" /></figure>
            </div>
            <div className="card-body ">
                <h2 className="card-title">{placeName}</h2>
                <p>{title}</p>
                <div>
                    <p>{Rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/place/${id}`} className="btn btn-primary">More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;