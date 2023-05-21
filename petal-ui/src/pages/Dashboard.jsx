import React from 'react';
import Carousel from '../components/SwipableCards';
import DashHeader from '../components/DashHeader';
import DashBody from '../components/DashBody';
import '../index.css';

function Dashboard() {
    return (
      <div className = "dashBoardWrapper">
        <DashHeader />
        <DashBody />
        <Carousel /> 
      </div>
    );
  }
  
  export default Dashboard;
  