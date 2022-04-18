import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Table from './Table';

const Blogs = () => {
    return (
        <div className='sm:w-11/12 md:w-3/4 mx-auto mt-6 mb-24'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne">
                        <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Difference between authorization and authentication?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <strong>Authorization Vs Authentication</strong>
                            <Table></Table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className=" accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Why am I using firebase? What other options do I have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            I am using <strong>Firebase</strong> because, it has made the authentication system easy. I can easily implement this for new user creation as well as it has a robust feature of alternative sign-in methods with popular third party platforms like "Facebook","Github","Microsoft", "Twitter",  "Apple" etc.
                            <div className='border-2 p-2 w-3/4 mx-auto py-3 mt-1 shadow-lg'>
                                Other <strong>Alternative options</strong> of Firebase are:
                                <ul>
                                    <li><FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> Okta</li>
                                    <li><FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> Auth0 </li>
                                    <li><FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> Keycloak</li>
                                    <li><FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> Passport</li>
                                    <li><FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> Parse</li>
                                    <li><FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> Backendless</li>
                                    <li><FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> Kuzzle</li> etc.
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button className=" accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            Except <strong>authentication</strong>, Firebase provides so many robust cloud computing services. Some of these are :
                            <div className='border-2 w-3/4 mx-auto py-3 mt-3 shadow-lg'>
                                <ul>
                                    <li className='font-semibold'>Cloud Firestore.</li>
                                    <li className='font-semibold'>Cloud Functions.</li>
                                    <li className='font-semibold'>Cloud Storage.</li>
                                    <li className='font-semibold'>Cloud Messaging.</li>
                                    <li className='font-semibold'>Hosting.</li>
                                    <li className='font-semibold'>Google Analytics.</li>
                                    <li className='font-semibold'>Predictions.</li>
                                    <li className='font-semibold'>Dynamic Links.</li>
                                    <li className='font-semibold'>Remote Config.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;