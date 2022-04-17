import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const NavBar = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className=" relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light sticky top-0 z-50">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <Link to="/" className=" flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
                        <img src={logo} style={{ "height": "40px" }} alt=""
                            loading="lazy" />
                    </Link>
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li className="nav-item pt-2 px-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 font-bold font-serif text-lg">
                            <NavLink to="/home" className={({ isActive }) => (isActive) ? 'text-red-600' : ''}>Rahad Clicks</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center relative">

                    <div className="dropdown relative">
                        <a className=" text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center" id="dropdownMenuButton1"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell"
                                className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z">
                                </path>
                            </svg>
                        </a>
                        <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton1">
                            <li className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                <NavLink to="/blogs" className={({ isActive }) => (isActive) ? 'text-red-600' : ''}>Blogs</NavLink>
                            </li>
                            <li className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                <NavLink to="/contact" className={({ isActive }) => (isActive) ? 'text-red-600' : ''}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown relative">
                        <a className="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
                            data-bs-toggle="dropdown" ari a-expanded="false">
                            <img src={avatar} className="rounded-full"
                                style={{ "height": "25px", "width": "25px" }} alt="" loading="lazy" />
                        </a>
                        <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton2">
                            <li className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                                <NavLink to="/about" className={({ isActive }) => (isActive) ? 'text-red-600' : ''}>About Rahad</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item pt-1 pl-4 pr-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 font-bold">
                                {user ? <button
                                    onClick={() => {
                                        signOut(auth);
                                        toast.success('Successfully Logged Out', { id: 'logout' });
                                    }}
                                    className='text-blue-600 hover:text-orange-500 rounded-xl'>Logout</button>
                                    :
                                    <NavLink className={({ isActive }) => (isActive) ? 'text-red-600' : ''} to='/login'>Login</NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;