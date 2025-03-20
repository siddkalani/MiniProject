import React, { useState } from 'react';
import { TfiClose } from "react-icons/tfi";
import { useSelector, useDispatch } from 'react-redux';
import { sidebarActions } from '../../store/slices/siderbarSlice';
import { IoStarSharp } from "react-icons/io5";
import { useEffect } from 'react';
import SideNav from './SideNav';
import ShortLinks from './ShortLinks';

const Sidebar = () => {
  const toggle = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(sidebarActions.toggleClose());
  };

  return (
    <>
      {toggle.toggle && (
        <div
          className="overlay"
          onClick={handleToggle}
        ></div>
      )}
      <div className={`${toggle.toggle ? "sidebar" : "sidebar closed"}`}>
        <div className='side-nav h-full flex flex-col overflow-y-auto overflow-x-hidden fixed bg-[var(--color-light)] lg:w-[37%] w-full'>
          <div className='cross flex-custom-center cursor-pointer absolute' onClick={handleToggle}>
            <div className='cross-btn relative'>
              <div className='cross-bar'></div>
              <div className='cross-bar'></div>
            </div>
          </div>
          <SideNav handleToggle={handleToggle} />
          <ShortLinks />
          {/* <FooterSidebar /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
