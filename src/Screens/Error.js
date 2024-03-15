import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 w-full">
      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/unauthorized-access-3457737-2891442.png" alt="Unauthorized Access" className="" />
      <h1 className="text-red-600 font-semibold text-4xl mt-4">401 Unauthorized Access</h1>
      <p className="mt-2 text-gray-600 text-lg max-w-md text-center">
        Sorry, you don't have permission to access this page.
      </p>
    
    </div>
  );
};

export default ErrorPage;
