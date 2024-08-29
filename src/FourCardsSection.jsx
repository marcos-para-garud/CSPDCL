import React from 'react';
import logo1 from './assets/logo 1.png'
import logo2 from './assets/logo 2.png'
import logo3 from './assets/logo 3.png'
import logo4 from './assets/logo 4.png'
import backgroundimage from './assets/Frame 154.png' 
import { Link } from 'react-router-dom';

const FourCardsSection = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-4">
        

        <div className="grid grid-cols-1 md:mx-14 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 sm:w-64 rounded-lg shadow-lg border-2 border-blue-300 ">
            <img src={logo1} alt="Logo 1" className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Employee Login</h3>
            <p className="text-center text-gray-700 mb-4">This is a two-line sentence describing the content.</p>
            <Link to="/login">
              <button className="bg-red-600 text-white px-4 py-2 w-[170px] sm:w-auto rounded hover:bg-red-900 block mx-auto">
                Login
              </button>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 sm:w-64 rounded-lg shadow-lg border-2 border-blue-300 ">
            <img src={logo2} alt="Logo 2" className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Dashboard</h3>
            <p className="text-center text-gray-700 mb-4">This is a two-line sentence describing the content.</p>
            <Link to="/dashboard">
            <button className="bg-red-600 text-white px-4 py-2 w-[170px] sm:w-auto rounded hover:bg-red-900 block mx-auto">
              Dashboard
            </button>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 sm:w-64 rounded-lg shadow-lg border-2 border-blue-300 ">
            <img src={logo3} alt="Logo 3" className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Mail Box</h3>
            <p className="text-center text-gray-700 mb-4">This is a two-line sentence describing the content.</p>
            <button className="bg-red-600 text-white px-4 py-2 w-[170px] sm:w-auto rounded hover:bg-red-900 block mx-auto">
              Mail Box
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 sm:w-64 rounded-lg shadow-lg border-2 border-blue-300 ">
            <img src={logo4} alt="Logo 4" className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">FeedBack</h3>
            <p className="text-center text-gray-700 mb-4">This is a two-line sentence describing the content.</p>
            <button className="bg-red-600 text-white px-4 py-2 w-[170px] sm:w-auto rounded hover:bg-red-900 block mx-auto">
              FeedBack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourCardsSection;
