import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const MainLayout = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayout;