import React from 'react';

const PhotoBox = ({img,info}) => {
    return (
        <div className='border-2 shadow-lg pb-6 max-w-xs mx-auto'>
          <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs mx-auto">
                <img src={img} className="max-w-xs hover:scale-110 transition duration-300 ease-in-out mb-5" alt="Louvre" />
                <span>{info}</span>
            </div>  
        </div>
    );
};

export default PhotoBox;