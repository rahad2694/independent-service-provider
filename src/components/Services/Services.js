import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    console.log(services);
    return (
        <div className='m-12'>
            <h1 className='text-2xl font-bold my-8 py-4'>Services</h1>
            <div className='grid grid-cols-3 gap-12'>
                {services.map(service => <Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;