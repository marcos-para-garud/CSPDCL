import React from 'react';
import TopSection from './TopSection.jsx';
import FourSubsections from './FourSubSections.jsx';
import logo from './assets/cspdcl-logo.png';
import customerImage from './assets/customer-image.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MyAccountRightSidebar from './MyAccountRightSideBar.jsx';
import MyLinkedAccount from './MyAcountBottomSection.jsx';
import { Link } from 'react-router-dom';

const MyAccount = ({ customerName }) => {
    const [isConsumerAccountOpen, setConsumerAccountOpen] = useState(false);
  const [isOnlineBillPaymentOpen, setOnlineBillPaymentOpen] = useState(false);
  const [isConsumerESevaOpen, setConsumerESevaOpen] = useState(false);
  const [isOutageInformationOpen, setOutageInformationOpen] = useState(false);

  const toggleConsumerAccount = () => setConsumerAccountOpen(!isConsumerAccountOpen);
  const toggleOnlineBillPayment = () => setOnlineBillPaymentOpen(!isOnlineBillPaymentOpen);
  const toggleConsumerESeva = () => setConsumerESevaOpen(!isConsumerESevaOpen);
  const toggleOutageInformation = () => setOutageInformationOpen(!isOutageInformationOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopSection />
      <div className="flex justify-between items-center bg-[#F3F3F3] py-4 px-8 shadow-md">
        <div className="flex items-center">
          <Link to="/">
          <img src={logo} alt="CSPDCL Logo" className="h-16" />
          </Link>
          <h1 className="text-2xl font-semibold ml-4">Welcome, {customerName}</h1>
        </div>
        <div>
          <img
            src={customerImage}
            alt="Customer"
            className="h-12 sm:w-12 w-20 rounded-full border border-gray-300"
          />
        </div>
      </div>
      {/* Left Sidebar */}
      <div className='flex'>
      <div className="sm:w-[12.5%] w-[24%] bg-[#274699] text-white p-4 shadow-md text-sm ps-2">
          <ul className="space-y-4">
            <li className="font-semibold cursor-pointer" onClick={toggleConsumerAccount}>
              Consumer Account
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-4 transition-transform ${isConsumerAccountOpen ? 'rotate-180' : 'rotate-0'}`}
              />
              {isConsumerAccountOpen && (
                <ul className="ml-4 space-y-2">
                  {/* <li>Account Overview</li> */}
                  <li>
                    <Link to="/my-account" className="cursor-pointer">Account Overview</Link>
                  </li> {/* Use Link */}
                  <li>Account Details</li>
                </ul>
              )}
            </li>
            <li className="font-semibold cursor-pointer" onClick={toggleOnlineBillPayment}>
              Online Bill Payment
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-4 transition-transform ${isOnlineBillPaymentOpen ? 'rotate-180' : 'rotate-0'}`}
              />
              {isOnlineBillPaymentOpen && (
                <ul className="ml-4 space-y-2">
                  <li>Pay Now</li>
                  <li>Payment History</li>
                </ul>
              )}
            </li>
            <li className="font-semibold cursor-pointer" onClick={toggleConsumerESeva}>
              Consumer E-Seva
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-4 transition-transform ${isConsumerESevaOpen ? 'rotate-180' : 'rotate-0'}`}
              />
              {isConsumerESevaOpen && (
                <ul className="ml-4 space-y-2">
                  <li>Service Requests</li>
                  <li>Track Requests</li>
                </ul>
              )}
            </li>
            <li className="font-semibold cursor-pointer" onClick={toggleOutageInformation}>
              Outage Information
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-4 transition-transform ${isOutageInformationOpen ? 'rotate-180' : 'rotate-0'}`}
              />
              {isOutageInformationOpen && (
                <ul className="ml-4 space-y-2">
                  <li>Current Outages</li>
                  <li>Outage History</li>
                </ul>
              )}
            </li>
            <li className="font-semibold"><a href='#'>Tenders</a></li>
            <li className="font-semibold"><a href='#'>Investors</a></li>
            <li className="font-semibold"><a href='#'>Recruitments</a></li>
            <li className="font-semibold"><a href='#'>Tariff Petitions</a></li>
            <li className="font-semibold"><a href='#'>Consumer Information</a></li>
          </ul>
          
        </div>
        <MyAccountRightSidebar/>
        
        </div>
        
      
      <FourSubsections />
    </div>
  );
};

export default MyAccount;






