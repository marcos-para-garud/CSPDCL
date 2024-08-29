





import React from 'react';
import MyLinkedAccount from './MyAcountBottomSection';

const MyAccountRightSidebar = () => {
  return (
    <div className="sm:w-full w-[76%] bg-white p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Account</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {/* Box 1 */}
        <div className="bg-[#E1E1E1] p-6 shadow-sm rounded">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[#274699]">
            <div className="font-semibold text-[#274699]">BP Number:</div>
            <div>123456789</div>
            <div className="font-semibold text-[#274699]">Consumer Name:</div>
            <div>Jitendra Bharadwaj</div>
            <div className="font-semibold text-[#274699]">Consumer Type:</div>
            <div>L T type</div>
            <div className="font-semibold text-[#274699]">Tariff Category:</div>
            <div>Domestic general purpose SG 50% rebate</div>
            <div className="font-semibold text-[#274699]">Address:</div>
            <div>1234 Main St, City, State, 123456</div>
            <div className="font-semibold text-[#274699]">Mobile No.:</div>
            <div>*******222</div>
            <div className="font-semibold text-[#274699]">Email ID:</div>
            <div>***@yahoo.com</div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-[#E1E1E1] p-6 shadow-sm rounded flex flex-col">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[#274699]">
            <div className="font-semibold text-[#274699]">First Name:</div>
            <div>Jitendra</div>
            <div className="font-semibold text-[#274699]">Last Name:</div>
            <div>Bharadwaj</div>
            <div className="font-semibold text-[#274699]">Mobile Number:</div>
            <div>*******222</div>
            <div className="font-semibold text-[#274699]">Email ID:</div>
            <div>***@yahoo.com</div>
            <div className="font-semibold text-[#274699]">Address:</div>
            <div>1234 Main St, City, State, 123456</div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-[#E1E1E1] p-6 shadow-sm rounded flex flex-col text-[#274699]">
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email alert at the time of bill generation
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email alert for confirmation of my bill payment
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email alert at the time of registering complaint
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email alert at the time of registering service request
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Email alert at the time of outage affecting my supply
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Send electricity bill by email also
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Send electricity bill by WhatsApp also
            </label>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-[#E1E1E1] p-6 shadow-sm rounded">
          <h3 className="font-semibold text-lg mb-2">My Primary Account</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[#274699]">
            <div className="font-semibold text-[#274699]">BP number</div>
            <div>123456789</div>
            <div className="font-semibold text-[#274699]">Consumer name</div>
            <div>Jitendra Bharadwaj</div>
            <div className="font-semibold text-[#274699]">Address</div>
            <div>1234 Main St, City, State, 123456</div>
            <div className="font-semibold text-[#274699]">Mobile number</div>
            <div>*******222</div>
            
          </div>
        </div>
      </div>
      <MyLinkedAccount/>
    </div>
  );
};

export default MyAccountRightSidebar;
