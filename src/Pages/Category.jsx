/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlaceCard from './PlaceCard';

const Category = () => {
    const yourPlaces=useLoaderData();
    console.log(yourPlaces);
    return (
        <div>
            {
                yourPlaces.map(place=><PlaceCard key={place.id} place={place}></PlaceCard>)
            }
        </div>
    );
};

export default Category;