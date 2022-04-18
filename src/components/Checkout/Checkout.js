import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = () => {
        toast.success('Booking Succeeded..!', { id: 'bookSuccess' });
        navigate('/success');
    }
    return (
        <div>
            <div>
                <div className='mt-5 mx-10'>
                    <h1 className='font-semibold font-serif my-5'>Dear  <span className='text-orange-500 text-xl'>{user?.displayName}</span>, Please provide Photo-shoot info</h1>
                </div>
                <div className='flex justify-center'>
                    <div className="block p-10 rounded-lg shadow-md mb-10 hover:shadow-xl bg-white md:w-2/5 border-2">
                        <div>
                            <div className="form-group mb-6">
                                <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                                    placeholder="Billing Name" />
                            </div>

                            <div className="form-group mb-6">
                                <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                                    placeholder="Email address" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="number"
                                    placeholder="Contact Number" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="month"
                                    placeholder="Expected Month" />
                            </div>
                            <div className="form-group mb-6">
                                <textarea
                                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address"
                                    rows="3"
                                    placeholder="Event Address"
                                ></textarea>
                            </div>
                            <button onClick={handleSubmit} type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;