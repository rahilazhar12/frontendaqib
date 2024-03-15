import React from 'react';
import { FaUser, FaBuilding, FaIdCard, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    const user = sessionStorage.getItem('user')
    const role = user ? JSON.parse(user).role : null

    const navigate = useNavigate()


    const { logout } = useAuth()



    const Logout = () => {
        logout()
        navigate('/')
    };

    return (
        <div className='h-screen w-72 bg-gray-800 text-white'>
            <div className="flex items-center justify-center h-20 border-b border-gray-700">
                <span className="text-2xl font-semibold">Welocme, {role}</span>
            </div>




            <div className="flex flex-col p-4">
                {role === 'admin' && role !== 'hr' &&
                    <Link to="/adminview" className="flex items-center p-2 my-2 transition-colors duration-200 text-white rounded-md hover:bg-gray-700">
                        <FaUser className="w-5 h-5" />
                        <span className="mx-4 text-lg font-normal">User Account</span>
                    </Link>
                }

                {(role === 'admin' || role === 'hr') &&
                    <a href="#" className="flex items-center p-2 my-2 transition-colors duration-200 text-white rounded-md hover:bg-gray-700">
                        <FaBuilding className="w-5 h-5" />
                        <span className="mx-4 text-lg font-normal">Human Resource</span>
                    </a>
                }

                <a href="#" className="flex items-center p-2 my-2 transition-colors duration-200 text-white rounded-md hover:bg-gray-700">
                    <FaIdCard className="w-5 h-5" />
                    <span className="mx-4 text-lg font-normal">Employee Profile</span>
                </a>
                <a onClick={Logout} href="#" className="flex items-center p-2 my-2 transition-colors duration-200 text-red-400 rounded-md hover:bg-gray-700">
                    <FaSignOutAlt className="w-5 h-5" />
                    <span className="mx-4 text-lg font-normal">Quit</span>
                </a>
            </div>
        </div>
    );
};

export default Sidenav;
