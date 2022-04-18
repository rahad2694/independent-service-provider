import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='pb-4 pt-2 bg-white mt-5'>
            <h2>&copy; Copyright reserved {year}</h2>
        </div>
    );
};

export default Footer;