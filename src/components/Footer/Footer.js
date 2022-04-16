import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div>
            <h2>&copy; Copyright reserved {year}</h2>
        </div>
    );
};

export default Footer;