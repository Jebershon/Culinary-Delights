import { AccountCircle, AccountCircleOutlined, AdminPanelSettings, Login, Logout } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './/Home.css';
import { ColorGoo, Mail, User } from "./Asserts/Anim";
import logo from './Asserts/dinner.png';
function NavBar(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {setShow2(true);
                               setShow(false);};
    return(
      <div>
        <Modal show={show} onHide={handleClose} contentClassName='modal' className='body-blur'>
        <Modal.Body>
            <form  style={{color:"#fc8019"}}>
            <p class="title">Welcome back</p>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><User/></InputGroup.Text>
                <Form.Control
                placeholder="Email"
                aria-describedby="basic-addon1"
                type="email"
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Password"
                aria-describedby="basic-addon1"
                type='password'
                className='rem-border'/>
               </InputGroup>
               <Row>
                <Col>
                <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    label="Remember me"
                    className='rem-border'/>
                </Col>
                <Col xs={2}></Col>
                <Col>
                <span class="span-l">
                    <a href='#' style={{textDecoration:"none",color:"#fc8019"}}>Forgot password?</a>
                </span>
                </Col>
                </Row>
                <br/>
                <Button variant='warning' size="lg" style={{width:"100%"}}>
                Sign In
                </Button>
                <p class="p">Don't have an account?<a class="span" onClick={handleShow2}>Sign Up</a></p>
                <p class="p line">Or With</p>
                <div class="flex-row">

                <button class="btn-l google">
                    <GoogleIcon/>
                    Google 
                </button>
                </div>
                </form>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2} contentClassName='modal' className='body-blur'>
        <Modal.Body>
            <form  style={{color:"#fc8019"}}>
            <p class="title">Create Account</p>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AccountCircle/></InputGroup.Text>
                <Form.Control
                placeholder="Full Name"
                aria-describedby="basic-addon1"
                type="text"
                className='rem-border'/>
               </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><User/></InputGroup.Text>
                <Form.Control
                placeholder="Email"
                aria-describedby="basic-addon1"
                type="email"
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Password"
                aria-describedby="basic-addon1"
                type='password'
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Confirm Password"
                aria-describedby="basic-addon1"
                type='password'
                className='rem-border'/>
               </InputGroup>
               <Row>
                <Col>
                <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    label="Remember me"
                />
                </Col>
                <Col xs={2}></Col>
                <Col>
                <span class="span-l">
                    <a href='#' style={{textDecoration:"none",color:"#fc8019"}}>Forgot password?</a>
                </span>
                </Col>
                </Row>
                <br/>
                <Button variant='warning' size="lg"  style={{width:"100%"}}>
                Sign Up
                </Button>
                {/* <p class="p">Already have an account?<span class="span">Sign In</span></p> */}
                <p class="p line">Or With</p>
                <div class="flex-row">

                <button class="btn-l google">
                    <ColorGoo/>
                    Google 
                </button>
                </div>
                </form>
        </Modal.Body>
      </Modal>

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
                <center><Nav.Link className='navi'><Link to='./Glocery' className='nav-text'>Grocery</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./Recipes' className='nav-text'>Recipes</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./NutriCalc' className='nav-text'>NutriCalc</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./Aboutus' className='nav-text'>About us</Link></Nav.Link></center>
              </Nav>
              <Nav>
                  <center><Nav.Link className='navi nav-text' style={{color:"white"}} onClick={handleShow}><Login/></Nav.Link></center>
              </Nav>
              <br/>
                <center>
                <NavDropdown className='navi nav-text' title={<AccountCircle/>} id="basic-nav-dropdown" menuVariant='dark' align="end">
                  <center>
                    <NavDropdown.Item ><Link to="./MyProfile" className='nav-text'><AccountCircleOutlined/></Link></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item ><Link to="./AdminDash" className='nav-text'><AdminPanelSettings/></Link></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item ><Logout/></NavDropdown.Item>
                    </center>
                </NavDropdown>
                </center>
            </Navbar.Collapse>
        </Navbar>
        </Col>
    </Row>
    </div>
    );
}
export default NavBar;