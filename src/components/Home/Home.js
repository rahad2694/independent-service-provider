import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;