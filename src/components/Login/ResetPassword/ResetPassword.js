import React, { useState } from 'react';
import toast from 'react-hot-toast';
import auth from '../../../Firebase/Firebase.init';
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = () => {
    const [email, setEmail] = useState('');
   
    const handleResetBtn =()=>{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            toast.success('Reset Email sent..!', { id: 'succeeded' });
        })
        .catch(error=>{
            if (error.message.includes('user-not-found') || error.message.includes('invalid-email')) {
                toast.error('No Such User Found!', { id: 'send-error' });
            } else {
                toast.error(error.message, { id: 'send-error' });
            }
        })
    }
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button"
                className="inline-block py-2.5 font-semibold text-sm leading-tight hover:text-red-500 active:text-red-500 transition duration-150 ease-in"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Forgot password?
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                                Password Reset
                            </h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4">

                            <div className="mb-6">
                                <input
                                    onBlur={(e) => setEmail(e.target.value)}
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput"
                                    placeholder="Your Email address"
                                    required
                                />
                            </div>
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button"
                                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">Close</button>
                            <button type="button"
                                onClick={handleResetBtn}
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Send Reset Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;