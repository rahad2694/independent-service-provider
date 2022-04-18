import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import Stepper from '../Stepper/Stepper';
import 'tw-elements';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Stepper></Stepper>
        </div>
    );
};

export default Home;