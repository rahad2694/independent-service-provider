import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className='grid grid-cols-2 py-1'>
            <div className='flex ml-2 md:ml-10'>
                <Link className='flex justify-center align-middle' to='/'>
                    <p className='text-xl font-bold mt-4'>Wildlife Photographer</p>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className='flex justify-evenly align-middle mt-6 md:mt-4 md:mx-20'>
                <NavLink className={({ isActive }) => (isActive) ? 'text-red-600' : ''} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? 'text-red-600' : ''} to='/about'>About-Me</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? 'text-red-600' : ''} to='/login'>Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;