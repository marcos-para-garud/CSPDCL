import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const MyLinkedAccount = () => {
  // Sample data for the accounts
  const [accounts, setAccounts] = useState([
    {
      bpNumber: '123456789',
      consumerName: 'Jitendra Bharadwaj',
      address: '1234 Main St, City, State, 123456',
    },
    {
      bpNumber: '987654321',
      consumerName: 'John Doe',
      address: '5678 Elm St, City, State, 654321',
    },
    {
        bpNumber: '987654322',
        consumerName: 'John Doe',
        address: '5678 Elm St, City, State, 654321',
      },
      {
        bpNumber: '987654323',
        consumerName: 'John Doe',
        address: '5678 Elm St, City, State, 654321',
      },
      {
        bpNumber: '987654324',
        consumerName: 'John Doe',
        address: '5678 Elm St, City, State, 654321',
      },
      {
        bpNumber: '987654325',
        consumerName: 'John Doe',
        address: '5678 Elm St, City, State, 654321',
      },
      {
        bpNumber: '987654326',
        consumerName: 'John Doe',
        address: '5678 Elm St, City, State, 654321',
      },
      {
        bpNumber: '987654327',
        consumerName: 'John Doe',
        address: '5678 Elm St, City, State, 654321',
      },
  ]);

  // Function to delete an account
  const handleDeleteAccount = (bpNumber) => {
    setAccounts(accounts.filter(account => account.bpNumber !== bpNumber));
  };

  return (
    <>
    <div className="sm:w-full bg-[#E1E1E1] sm:ml-0 -ml-5 shadow-md mt-6 rounded-md ">
      <h2 className="text-xl font-semibold p-4 ">My Linked Account</h2>
      <div className='relative overflow-x-auto'>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-[#8CAFC9] text-white text-center ">
            <th className="py-8 border">BP Number</th>
            <th className="p-2 border">Consumer Name</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Delete Account</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account , index) => (
            <tr key={index}  
            className={index % 2===0 ? 'bg-white text-center' : 'bg-[#B0C0EC] hover:bg-slate-500 text-center'}>
              <td className="p-2 border">{account.bpNumber}</td>
              <td className="p-2 border">{account.consumerName}</td>
              <td className="p-2 border text-[#274699]">{account.address}</td>
              <td className="p-2 border">
                <button onClick={() => handleDeleteAccount(account.bpNumber)}>
                    <span className="text-red-600 hover:text-red-800">Delete </span>
                  <FaTrashAlt className="text-red-600 hover:text-red-800 cursor-pointer inline" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
    <div className='text-[#274699] font-semibold my-6'>
        in case you have multiple accounts(i.e more than one connections) you can link additional<br></br> accounts 
        in your primary account byusing Add New Account link below.
    </div>
    <button className='bg-[#E10007] text-white rounded-md px-5 py-2 hover:bg-red-900 mb-[8%]'>
        Add new account <FaArrowRight className='inline'/>
    </button>
    </>
    
  );
};

export default MyLinkedAccount;
