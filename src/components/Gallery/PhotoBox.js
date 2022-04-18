import React from 'react';

const PhotoBox = ({img}) => {
    return (
        <div>
          <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs mx-auto">
                <img src={img} className="max-w-xs hover:scale-110 transition duration-300 ease-in-out" alt="Louvre" />
            </div>  
        </div>
    );
};

export default PhotoBox;