import { AccountCircle, AccountCircleOutlined, AdminPanelSettings, Login, Logout } from '@mui/icons-material';
import axios from 'axios';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles
import './/Home.css';
import './/external.css';
import { Mail, User } from "./Asserts/Anim";
import logo from './Asserts/dinner.png';

export default function NavBar(){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => { setShow(true); setShow2(false); };
  const navigate = useNavigate();

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => { setShow2(true); setShow(false); };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole] = useState("user");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [Login_email, setLogin_Email] = useState("");
  const [Login_password, setLogin_Password] = useState("");
  const [loading, setLoading] = useState(false);

  const Loader = () => {
    return (
<div class="loader">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
</div>
    );
  };

  const StoreSignup = (e) => {
    e.preventDefault();
    if (password === confirmpassword && password !== "") {
      axios.post('https://culinary-delights-backend.onrender.com/CreateUser', { name, email, password, role})
        .then(result => {
          console.log(result);
          setShow(true);
          setShow2(false);
          setDisplay(true);
          toast.success("Signup Successful!"); 
        })
        .catch(err => {
          console.log(err);
          if (err.response && err.response.status === 400 && err.response.data.error === 'User already exists') {
            toast.error("User already exists. Please log in instead."); 
          } else {
            toast.error("Signup failed. Please try again."); 
          }
        });
    } else {
      toast.error("Passwords do not match / empty."); 
    }
  }

 axios.defaults.withCredentials = true;
  const ValidateLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    axios.post('https://culinary-delights-backend.onrender.com/Login', { Login_email, Login_password })
      .then(result => {
        setLoading(false);
        console.log(result);
        if (result.data.status === "Success") {
          if(result.data.role === "admin"){
            window.localStorage.setItem("role",true);
            window.localStorage.setItem("token",result.data.token);
            window.localStorage.setItem("isloggedin",true);
            toast.success("Admin Login Successful!");
            window.location.reload();
            setShow(false);
            setDisplay(true);
          }
          else{
          console.log("Logged in successfully");
          window.location.reload();
          toast.success("Login Successful!"); 
          window.localStorage.setItem("token",result.data.token);
          window.localStorage.setItem("isloggedin",true);
          setShow(false);
          setDisplay(true);
          }
        } 
        else if (result.data === "Sorry Password Incorrect") 
        {
          toast.error("Incorrect password. Please try again."); // Notify user with error message
        } 
        else {
          console.log(result.data);
          setShow(false);
          setShow2(true);
          toast.error("Incorrect email or user does not exist. Please sign up."); // Notify user with error message
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false); 
        toast.error("Login failed. Please try again."); // Notify user with error message
      });
  }
  const [display, setDisplay] = useState(localStorage.getItem("isloggedin"));
  const [AdminDisplay, setAdminDisplay] = useState(localStorage.getItem("role"));
    return(
      <div>
      <ToastContainer />
      <Modal show={show} onHide={handleClose} contentClassName='modal' className='body-blur'>
        <Modal.Body>
            <form  style={{color:"#fc8019"}} onSubmit={ValidateLogin}>
            <p class="title">Welcome back</p>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><User/></InputGroup.Text>
                <Form.Control
                placeholder="Email"
                aria-describedby="basic-addon1"
                type="email"
                onChange={e=>setLogin_Email(e.target.value)}
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Password"
                aria-describedby="basic-addon1"
                type='password'
                onChange={e=>setLogin_Password(e.target.value)}
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
                {loading ? <Loader /> : (
                  <Button type='submit' variant='warning' size="lg" style={{width:"100%"}}>Sign In</Button>
                )}
                <p class="p">Don't have an account?<a class="span" onClick={handleShow2}>Sign Up</a></p>
                {/* <p class="p line">Or With</p>
                <div class="flex-row">
                <button class="btn-l google"><GoogleIcon/>Google</button>
                </div> */}
                </form>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2} className='body-blur'>
        <Modal.Body>
            <form  style={{color:"#fc8019"}} onSubmit={StoreSignup}>
            <p class="title">Create Account</p>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AccountCircle/></InputGroup.Text>
                <Form.Control
                placeholder="Full Name"
                aria-describedby="basic-addon1"
                type="text"
                id='name'
                onChange={e=>setName(e.target.value)}
                className='rem-border'/>
               </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><User/></InputGroup.Text>
                <Form.Control
                placeholder="Email"
                aria-describedby="basic-addon1"
                type="email"
                id='email'
                onChange={e=>setEmail(e.target.value)}
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Password"
                aria-describedby="basic-addon1"
                id='password'
                type='password'
                onChange={e=>setPassword(e.target.value)}
                className='rem-border'/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Confirm Password"
                aria-describedby="basic-addon1"
                type='password'
                onChange={e=>setConfirmpassword(e.target.value)}
                id='confirm'
                className='rem-border'/>
               </InputGroup>
                <br/>
                <Button type="submit" variant='warning' size="lg"  style={{width:"100%"}}>Sign Up</Button>
                <p class="p">Already have an account?<span onClick={handleShow} class="span">Sign In</span></p>
                {/* <p class="p line">Or With</p>
                <div class="flex-row">
                <button class="btn-l google"><ColorGoo/>Google</button>
                </div> */}
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
                {display? (
                  <>
                <center><Nav.Link className='navi'><Link to='./Glocery' className='nav-text'>Grocery</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./Recipes' className='nav-text'>Recipes</Link></Nav.Link></center>
                <center><Nav.Link className='navi'><Link to='./NutriCalc' className='nav-text'>NutriCalc</Link></Nav.Link></center>
                </>):(
                <center><Nav.Link className='navi'><Link to='./Aboutus' className='nav-text'>About us</Link></Nav.Link></center>
                )}
              </Nav>
              <br/>
              {!display? (
                <>
              <Nav>
                  <center><Nav.Link className='navi nav-text' style={{color:"white"}} onClick={handleShow}><Login/></Nav.Link></center>
              </Nav>
              </>
               ):(
                <center>
                <NavDropdown className='navi nav-text' title={<AccountCircle/>} id="basic-nav-dropdown" menuVariant='dark' align="end">
                <center>
                  {AdminDisplay?(
                    <>
                    <NavDropdown.Item ><Link to="./AdminDash" className='nav-text'><AdminPanelSettings/></Link></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item ><Link to="./MyProfile" className='nav-text'><AccountCircleOutlined/></Link></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    </>
                    ):(
                    <>
                    <NavDropdown.Item ><Link to="./MyProfile" className='nav-text'><AccountCircleOutlined/></Link></NavDropdown.Item>
                    <NavDropdown.Divider/>
                    </>
                    )}
                    <NavDropdown.Item ><Link to="./" className='nav-text' onClick={()=>{setDisplay(false);localStorage.clear();toast.success("Logged Out Successfully!");}}><Logout/></Link></NavDropdown.Item>
                    </center>
                </NavDropdown>
                </center>
                 )}
            </Navbar.Collapse>
        </Navbar>
        </Col>
    </Row>
    </div>
    );
}
