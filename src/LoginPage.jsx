import React from 'react';
import loginImage from './assets/loginImage.png'; // Replace with your image path
import { useEffect } from 'react';

const LoginPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div className='sm:block hidden'>
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex ">
        {/* Left side - Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img src={loginImage} alt="Login" className="w-full h-auto rounded-l-lg" />
        </div>

        {/* Right side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">Consumer Login</h2>
          <p className="text-gray-600 mb-6">Please enter your BP number and password to log in.
             All the details are mandatory</p>
          
          <div className="mb-4">
           
            <input
              type="text"
              id="bp-number"
              className="w-full px-3 py-4 border rounded-lg focus:outline-none focus:border-[#274699]"
              placeholder="Enter your BP Number"
            />
             <label htmlFor="bp-number" className="block text-[#274699] my-2">What is BP number?</label>
          </div>

          <div className="mb-6">
            {/* <label htmlFor="password" className="block text-gray-700 mb-2">Password</label> */}
            <input
              type="password"
              id="password"
              className="w-full px-3 py-4 border rounded-lg focus:outline-none focus:border-[#274699]"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-44 bg-red-600 text-white py-2 rounded-lg hover:bg-red-900">
            Login
          </button>

          <div className="flex gap-4 mt-4 text-blue-600">
            <a href="#" className="text-sm hover:underline">New User Registration</a>
            <a href="#" className="text-sm hover:underline">Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='sm:hidden block'>
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Consumer Login</h2>
      
      {/* Paragraph */}
      <p className="text-gray-600 font-light mb-6">Please enter your BP number and password to login.</p>
      
      {/* BP Number Input */}
      <div className="mb-4">
        
        <input 
          id="bpNumber" 
          type="text" 
          placeholder="BP Number" 
          className="w-full px-3 py-4 border-1 border-blue-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className='font-semibold text-blue-700 mt-3'> <a href="#"> What is BP Number?</a></div>
      </div>
      
      {/* Password Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
         
        </label>
        <input 
          id="password" 
          type="password" 
          placeholder="Enter your password" 
          className="w-full px-3 py-4 border-1 border-blue-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {/* Login Button */}
      <button 
        className="w-[170px] bg-red-600 ml-[22%] text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Login
      </button>
      
      {/* Links */}
      <div className="mt-4 mb-36 flex justify-between text-sm text-blue-500">
        <a href="#" className="hover:underline">New User Registration</a>
        <a href="#" className="hover:underline">Forgot Password?</a>
      </div>
    </div>
    </div>
    </>
  );
};

export default LoginPage;
