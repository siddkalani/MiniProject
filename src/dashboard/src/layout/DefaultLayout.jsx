/* eslint-disable react/prop-types */
import { useState } from 'react';
import {Outlet} from 'react-router-dom'
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import ECommerce from '../pages/Dashboard/ECommerce';

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const [isMedicalTourism, setIsMedicalTourism] = useState(true); // State to track the dashboard type

  // Function to toggle the dashboard type
  const toggleDashboard = () => {
    setIsMedicalTourism((prev) => !prev);
  };
  return (
    <div className="w-full h-full bg-[#F1F5F9] text-black ">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-full">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} toggleDashboard={toggleDashboard} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-hidden mt-[6rem]">
          {/* <!-- ===== Header Start ===== --> */}
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
