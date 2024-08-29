import React, { useEffect, useState } from 'react';
import data from './data.json'; // Assuming the data.json is in the same directory
import logo from './assets/cspdcl-logo.png';
import customerImage from './assets/customer-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import MyAccount from './Myaccount';

const Dashboard = ({ customerName }) => {
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
    <div className="min-h-screen bg-gray-100 mb-[14%]">
      {/* Top Section */}
      <div className="flex justify-between items-center bg-[#F3F3F3] py-4 sm:px-8 px-1 shadow-md">
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

      {/* Main Section */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="sm:w-[12.5%] w-[29%] bg-[#274699] text-white p-4 shadow-md text-sm ps-2">
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

        {/* Right Content Area (Table) */}
        <div className="w-full bg-white shadow-md relative overflow-x-auto">
          <table className="w-full border-collapse ">
            <thead>
              <tr className="bg-[#8CAFC9] text-white">
                <th className="border px-4 py-2">S No.</th>
                <th className="border px-3 py-2">BP No.</th>
                <th className="border px-3 py-2">Consumer Name</th>
                <th className="border px-3 py-2">Bill Month</th>
                <th className="border px-3 py-2">Due Date of Payment</th>
                <th className="border px-3 py-2">Net Payable Amount (Rs)</th>
                <th className="border px-3 py-2">Amount Payable with Surcharge (Rs)</th>
                <th className="border px-3 py-2">Last Payment Amount (Rs)</th>
                <th className="border px-3 py-2">Last Payment Date</th>
                <th className="border px-3 py-2">Tariff Code</th>
                <th className="border px-3 py-2">View Bill</th>
                <th className="border px-3 py-2">Pay Bill</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#B0C0EC] hover:bg-[#DDDDDD]'}>
                  <td className="border px-2 py-2 text-center">{row.sno}</td>
                  <td className="border px-2 py-2 text-center">{row.bpNo}</td>
                  <td className="border px-2 py-2 text-center">{row.consumerName}</td>
                  <td className="border px-2 py-2 text-center">{row.billMonth}</td>
                  <td className="border px-2 py-2 text-center">{row.dueDate}</td>
                  <td className="border px-2 py-2 text-center">{row.netPayableAmount}</td>
                  <td className="border px-2 py-2 text-center">{row.amountPayableWithSurcharge}</td>
                  <td className="border px-2 py-2 text-center">{row.lastPaymentAmount}</td>
                  <td className="border px-2 py-2 text-center">{row.lastPaymentDate}</td>
                  <td className="border px-2 py-2 text-center">{row.tariffCode}</td>
                  <td className="border px-2 py-2 text-blue-800 text-center font-bold">
                    <a href='#'>View</a>
                  </td>
                  <td className="border px-2 py-2">
                    <button className="bg-blue-900 text-white px-3 py-1 rounded text-center">Pay</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
