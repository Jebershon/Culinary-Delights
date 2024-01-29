import { BarChart, LocalDining, LocalGroceryStore, Shop } from '@mui/icons-material';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
      <Row>
        <Col>
            <div className='mb-5'>
              <Navbar collapseOnSelect expand="lg" className="transparent-Nav" fixed='top'>
              <Navbar>
                  <Container>
                    <Navbar.Brand className='text-white' style={{fontSize:"20px"}}>
                    <Link to='/' className='nav-brand'>
                    <img
                        alt="logo"
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top brand"
                      />&nbsp;
                      <span style={{color:"#ee7752"}}>C</span>ulinary&nbsp;
                      <span style={{color:"#ee7752"}}>D</span>elights
                      </Link>
                    </Navbar.Brand>
                  </Container>
                </Navbar>
                  <br/>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-underline">
                      {/* <center><Nav.Link className='navi'><Link to='/' className='nav-text'><HomeOutlined style={{color:"white"}}/> Home</Link></Nav.Link></center> */}
                      <center><Nav.Link className='navi nav-text' onClick={() => handleNavClick('AddRecipe')}><LocalDining style={{color:"white"}}/> AddRecipe</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => handleNavClick('AddGrocery')}><LocalGroceryStore style={{color:"white"}}/> AddGrocery</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => handleNavClick('Chart')}><BarChart style={{color:"white"}}/> Visual Data</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => handleNavClick('Sold')}><Shop style={{color:"white"}}/> Sold</Nav.Link></center>
                    </Nav>
                    {/* <Nav>
                        <center><Nav.Link className='navi' style={{color:"white"}}><Link to="./MyProfile" className='nav-text'><AccountCircleOutlined/></Link></Nav.Link></center>
                    </Nav> */}
                  </Navbar.Collapse>
              </Navbar>
              </div>
        </Col>
    </Row>
      <Container className='mt-5'>
        {activeComponent === 'AddRecipe' && (
          <div className='mt-5 mb-3'>
            <AddRecipe />
          </div>
        )}
        {activeComponent === 'AddGrocery' && (
          <div className='mt-5 mb-3'>
            <AddGrocery />
          </div>
        )}
        {activeComponent === 'Chart' && (
          <div className='mt-5 mb-3'>
            <ChartComponent/>
          </div>
        )}
        {activeComponent === 'Sold' && (
          <div className='mt-5 mb-3'>
            <SoldDetails/>
          </div>
        )}
      </Container>
    </div>
  );
}

export default AdminDash;
