import { BarChart, HomeOutlined, LocalDining, LocalGroceryStore, Shop } from '@mui/icons-material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddGrocery from './AddGrocery';
import AddRecipe from './AddRecipe';
import logo from './Asserts/dinner.png';
import ChartComponent from './ChartComponent.jsx';
import './Home-2.css'; // Make sure to fix the import path
import './Home.css';
import SoldDetails from './Sold-details.jsx';
function AdminDash() {
  const [activeComponent, setActiveComponent] = useState('AddRecipe');

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div>
      <div className="sidenav">
      <center>
      <img
                  alt="logo"
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top brand"/>&nbsp;
                  <span style={{color:"#ee7752",fontSize:"25px"}}>C</span>ulinary&nbsp;
                  <span style={{color:"#ee7752",fontSize:"25px"}}>D</span>elights
      </center>
        <hr/>
        <a onClick={() => handleNavClick('Home')}><Link to='/' className='sidenav-text'><HomeOutlined style={{color:"#ee7752"}}/> Home</Link></a>
        <hr/>
        <a className="sidenav-text" onClick={() => handleNavClick('AddRecipe')}><LocalDining style={{color:"#ee7752"}}/> AddRecipe</a>
        <hr/>
        <a className="sidenav-text" onClick={() => handleNavClick('AddGrocery')}><LocalGroceryStore style={{color:"#ee7752"}}/> AddGrocery</a>
        <hr/>
        <a className="sidenav-text" onClick={() => handleNavClick('Chart')}><BarChart style={{color:"#ee7752"}}/> Visual Data</a>
        <hr/>
        <a className="sidenav-text" onClick={() => handleNavClick('Sold')}><Shop style={{color:"#ee7752"}}/> Sold</a>
      </div>
      <Container className="dashboard">
        {activeComponent === 'AddRecipe' && (
          <div className='mt-3 mb-3'>
            <AddRecipe />
          </div>
        )}
        {activeComponent === 'AddGrocery' && (
          <div className='mt-3 mb-3'>
            <AddGrocery />
          </div>
        )}
        {activeComponent === 'Chart' && (
          <div className='mt-3 mb-3'>
            <ChartComponent/>
          </div>
        )}
        {activeComponent === 'Sold' && (
          <div className='mt-3 mb-3'>
            <SoldDetails/>
          </div>
        )}
      </Container>
    </div>
  );
}

export default AdminDash;
