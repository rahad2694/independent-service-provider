import React from 'react';

const Table = () => {
    return (
        <div className='border my-2'>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="mx-auto w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authorization
                                        </th>
                                        <th scope="col" class="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authentication
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="text-sm text-gray-900 font-light px-6 py-4">
                                        Authorization is the checking or allowance of any special power or access to the system.
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authentication is the checking of identity verification to gain entry or access.
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authorization needs Authentication first to proceed.
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authentication is done and then comes the Authorization part.
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="text-sm text-gray-900 font-light px-6 py-4  ">
                                            Example to Authorization is the CRUD access or viewing, editing, deleting and creating access.
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4  ">
                                            Example of Authentication is checking the login credentials to allow an user in.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;