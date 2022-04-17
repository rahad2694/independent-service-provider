import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-xl my-5 text-red-600'>404 !! Page Not Found..!!</h1>
            <div className=''>
                <div>
                    <Link to='/'>
                        <img className=' lg:w-3/4 mx-auto' src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;