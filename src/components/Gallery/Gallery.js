import React, { useEffect, useState } from 'react';
import PhotoBox from './PhotoBox';

const Gallery = () => {
    const [imageData, setImageData] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setImageData(data));
    }, []);
    return (
        <div className='mb-10'>
            <h1 className='text-2xl font-bold my-8 py-4'>Popular Captures</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    imageData.map(photobox => <PhotoBox key={photobox.id} img={photobox.img} info={photobox.info}></PhotoBox>)
                }
            </div>
        </div>
    );
};

export default Gallery;