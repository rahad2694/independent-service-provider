import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import logo from '../../images/logo.png'
import toast from 'react-hot-toast';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='grid grid-cols-2 py-1 sticky top-0 bg-white z-50'>
            <div className='flex ml-2 md:ml-10'>
                <Link className='flex justify-center align-middle' to='/'>
                    <p className='text-xl font-bold mt-4'>Rahad Photography</p>
                    <img style={{"height":"40px"}} src={logo} alt="" />
                </Link>
            </div>
            <div className='flex justify-evenly align-middle mt-6 sm:mt-4 md:mx-20'>
                <NavLink className={({ isActive }) => (isActive) ? 'text-red-600' : ''} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? 'text-red-600' : ''} to='/about'>About</NavLink>
                {user ? <button
                    onClick={() => {
                        signOut(auth);
                        toast.success('Successfully Logged Out', { id: 'logout' });
                    }}
                    className='text-blue-600 hover:text-orange-500 rounded-xl mb-6 sm:mb-4'>Logout</button>
                    :
                    <NavLink className={({ isActive }) => (isActive) ? 'text-red-600' : ''} to='/login'>Login</NavLink>
                }
            </div>
        </nav>
    );
};

export default Header;