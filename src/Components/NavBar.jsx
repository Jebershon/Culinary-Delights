import { AccountCircle, AccountCircleOutlined, AdminPanelSettings, AppRegistrationTwoTone, Login, Logout } from '@mui/icons-material';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './/Home.css';
import logo from './Asserts/dinner.png';
function NavBar(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return(
      <Row>
      <Col>
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
              <center><Nav.Link className='navi'><Link to='/' className='nav-text'>Home</Link></Nav.Link></center>
                <br/>
                <center><Nav.Link className='navi'><Link to='./Glocery' className='nav-text'>Grocery</Link></Nav.Link></center>
                <br/>
                <center><Nav.Link className='navi'><Link to='./Recipes' className='nav-text'>Recipes</Link></Nav.Link></center>
                <br/>
                <center><Nav.Link className='navi'><Link to='./NutriCalc' className='nav-text'>NutriCalc</Link></Nav.Link></center>
                <br/>
                <center><Nav.Link className='navi'><Link to='./Aboutus' className='nav-text'>About us</Link></Nav.Link></center>
                <br/>
              </Nav>
              <Nav>
              <Link to="./Signin" className='nav-text' style={{marginRight:"40px"}}><Login/></Link>

              <Link to="./Signup" className='nav-text'><AppRegistrationTwoTone/></Link>
              </Nav>
              <NavDropdown className='navi1 nav-text' title={<AccountCircle/>} id="basic-nav-dropdown" menuVariant='dark' align="end">
                <center>
                  {/* <NavDropdown.Item ><Link to="./Signin" className='nav-text'><Login/>Sign In</Link></NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item ><Link to="./Signup" className='nav-text'><AppRegistrationTwoTone/>Sign Up</Link></NavDropdown.Item>
                  <NavDropdown.Divider/> */}
                  <NavDropdown.Item ><Link to="./MyProfile" className='nav-text'><AccountCircleOutlined/></Link></NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item ><Link to="./AdminDash" className='nav-text'><AdminPanelSettings/></Link></NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item ><Logout/></NavDropdown.Item>
                  </center>
              </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
        </Col>
    </Row>
    );
}
export default NavBar;