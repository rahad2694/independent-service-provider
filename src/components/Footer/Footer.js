import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='pb-4'>
            <h2>&copy; Copyright reserved {year}</h2>
        </div>
    );
};

export default Footer;