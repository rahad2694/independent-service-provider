import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, price, info } = service;
    return (
        <div className='border-2 shadow-xl hover:shadow-2xl p-10'>
                <div className='flex justify-center'>
                    <img className='service-image hover:scale-105 duration-200 ease-in' src={img} alt="" />
                </div>
                <h1 className='font-bold my-3 text-lg'>{name}</h1>
                <p className='text-gray-500'>{info}</p>
                <h2 className='text-3xl font-bold my-4'>${price}</h2>
                <Link className='bg-orange-300 px-10 font-bold py-1 rounded-xl hover:bg-orange-500' to='checkout'>Book</Link>
        </div>
    );
};

export default Service;