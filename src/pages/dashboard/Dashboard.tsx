import React from 'react';
import DashboardSideBar from './DashboardSideBar';
import DashboardMain from './DashboardMain';

const Dashboard = () => {
    return (
        <div className='flex'>
            <DashboardSideBar></DashboardSideBar>
            <DashboardMain></DashboardMain>
        </div>
    );
};

export default Dashboard;