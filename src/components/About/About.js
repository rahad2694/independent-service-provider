import { faAward, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import rahad from '../../images/rahad.png'

const About = () => {
    return (
        <div className='shadow-xl border w-3/4 md:w-2/4 mx-auto px-10 pb-8 mt-4 mb-20'>
            <div className='flex justify-center'>
                <img className='w-2/4' src={rahad} alt="" />
            </div>
            <h2 className='text-2xl font-bold'>Saiful Islam Rahad</h2>
            <div className='3/4 mx-auto'>
                <p className='py-2 text-xl'>My Goal: <FontAwesomeIcon icon={faBullseye}></FontAwesomeIcon></p>
                <p className='text-md'>My goal is to be a successful wild life photographer. I am working hard for this target. Yet I have so many things to learn. I dream of having The <br/> <span className='text-orange-500 font-semibold'><FontAwesomeIcon icon={faAward}></FontAwesomeIcon> Pulitzer Prize for Feature Photography <FontAwesomeIcon icon={faAward}></FontAwesomeIcon> </span>  one day.</p>
            </div>
        </div>
    );
};

export default About;