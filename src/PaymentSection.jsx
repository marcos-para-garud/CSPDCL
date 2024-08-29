import React from 'react';
import billPay from './assets/Frame 50.png';
import registration from './assets/Frame 53.png';
import login from './assets/Frame 54.png';

const PaymentSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-8 space-y-4 lg:space-y-0 lg:space-x-4">
      {/* First Box */}
      <div className="w-full lg:w-1/2 p-4 bg-[#274699] rounded-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Quick Bill Payment</h2>
        <div className="border-t h-10 w-[50vw] -ml-4 border-white"></div>
        <div className="bg-white p-6 rounded-lg shadow-md h-80  lg:ml-36 lg:mr-36 min-h-[345px]">
          {/* Logo */}
          <img src={billPay} alt="logo" className="w-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-4">Pay Your Bill now</h3>
          <p className="text-gray-600 text-center -mt-4 mb-4">Make fast payment using UPI and credit card</p>
          <div className="m-2">
            <input
              type="text"
              placeholder="Enter your BP number"
              className="bg-slate-200 rounded-md mx-auto block p-3 w-full"
            />
          </div>
          <div className="m-2">
            <button className="bg-red-600 text-white sm:py-2 py-2 w-[170px] sm:w-auto sm:px-4 px-4 rounded-md hover:bg-red-950 mx-auto block">
              Pay now
            </button>
          </div>
        </div>
      </div>

      {/* Second Box */}
      <div className="w-full lg:w-1/2 p-4 bg-[#274699] rounded-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">E-Seva</h2>
        <div className="border-t h-10 border-white"></div>
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Customer Registration Card */}
          <div className="bg-white p-6 rounded-lg shadow-md sm:w-1/2 min-h-[345px] flex flex-col justify-between">
            {/* Logo */}
            <img src={registration} alt="logo" className="w-16 mx-auto" />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-center w-full">Consumer Registration</h3>
              <div className="text-gray-600 text-center w-full">Complete your registration here</div>
            </div>
            <button className="bg-red-600 text-white  mx-auto block sm:py-2 py-2 w-[170px] sm:w-auto sm:px-4 px-4 rounded hover:bg-red-950">
              Signup
            </button>
          </div>

          {/* Customer Login Card */}
          <div className="bg-white p-6 rounded-lg shadow-md sm:w-1/2 min-h-[345px] flex flex-col justify-between">
            {/* Logo */}
            <img src={login} alt="logo" className="w-16 mx-auto" />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-center w-full">Consumer Login</h3>
              <div className="text-gray-600 text-center w-full">Customer can Login from here</div>
            </div>
            <button className="bg-red-600 text-white py-2 mx-auto block w-[170px] sm:w-auto px-4 rounded hover:bg-red-950">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
