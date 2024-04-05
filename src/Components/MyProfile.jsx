import { History } from '@mui/icons-material';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import './/external.css';
import Footer from './Footer';
import GroceryPurchaseCard from './Grocery/GroceryPurchaseCard.jsx';
import purchaseDetails from './Hardcode-data/purchaseDetails.js';
import Restriction from './Restriction.jsx';
const BackBtn = () => {
  return (
    <div>
      <a style={{ textDecoration: "none" }} href='/'>
        <button className="Btn">
          <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
          <div className="in-text">Exit</div>
        </button>
      </a>
    </div>
  )
}

function UserProfile() {
  const [avatar, setAvatar] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png');
  const [storedProfile, setStoredProfile] = useState(null);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if(window.localStorage.getItem("token")){
    const token = jwtDecode(window.localStorage.getItem("token"));
    if (token.id) {
      setId(token.id);
    }
    else {
      setId(" ");
    }
  }
  else{
    
  }
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`https://culinary-delights-backend.onrender.com/FindUser/${id}`)
        .then(result => {
          console.log("Found user:", result.data);
          const userData = result.data;
          setName(userData.name);
          setLocation(userData.location);
          setPhno(userData.phoneNumber);
          setEmail(userData.email);
          setStoredProfile(userData);
          if (userData.profilePicture != "pic-no") {
            setAvatar(userData.profilePicture);
          }
            })
            .catch(err => console.log(err));
    }
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhnoChange = (event) => {
    setPhno(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProfile = {
      name,
      email,
      phoneNumber:phno,
      location,
      avatar
    };

    axios.put(`https://culinary-delights-backend.onrender.com/UpdateUser/${id}`, updatedProfile)
      .then(response => {
        console.log("Updated user profile:", response.data);
        setStoredProfile(updatedProfile);
        toast.success("Updated Successful!"); 
      })
      .catch(error => {
        console.log("Error updating user profile:", error);
      });
  };
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [display,setDisplay]=useState(window.localStorage.getItem("isloggedin"));

  return (
    <>
    {display?(
    <>
    <div>
      <ToastContainer />
      <div>
        <BackBtn />
      </div>
      <Container>
        <Row>
          <Col lg={12}>
            <center>
              <div>
                <h1 className="line-1 anim-typewriter"><span style={{ color: "#fc8019" }}>Welcome</span> {name}!</h1>
              </div>
            </center>
          </Col>
        </Row>
      </Container>

      <center>

      <Container>
        <Row className="mt-5">
          <Col lg={3}>
            <Card className="profile-bg p-3 mb-3">
                <Card.Img  variant="top" src={avatar} style={{borderRadius:"160px 160px"}}/>
                <Card.Body>
                  <Card.Title>{storedProfile?.name}</Card.Title>
                  <Card.Text>
                  {storedProfile?.location}
                  </Card.Text>
                </Card.Body>
            </Card>
          </Col>
          <Col lg={9}>
            <Card className="profile-bg p-3">
              <Card.Body>
                <Card.Title>Profile Information</Card.Title>
                <hr/>
                <Card.Text>
                <InputGroup className="mb-4 mt-2">
                  <InputGroup.Text id="basic-addon1">Name:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.name}
                    aria-describedby="basic-addon1"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                <Card.Text>
                <InputGroup className="mb-4">
                  <InputGroup.Text id="basic-addon2">Email:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.email}
                    aria-describedby="basic-addon2"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                <Card.Text>
                <InputGroup className="mb-4">
                  <InputGroup.Text id="basic-addon3">Ph no:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.phoneNumber}
                    aria-describedby="basic-addon3"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                <Card.Text>
                <InputGroup className="mb-4">
                  <InputGroup.Text id="basic-addon4">Location:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.location}
                    aria-describedby="basic-addon4"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>

      <Container>
      <Row>
          <Col>
                <Card className='profile-bg mt-3'>
                  <Card.Body>
                    <Card.Title>Account Settings</Card.Title>
                    <Card.Text>You can customize your account settings here.</Card.Text>
                    <Button variant="warning" onClick={handleShow}>
                      Edit Profile
                    </Button>
                    <Button variant="danger" onClick={()=>{localStorage.clear();navigate("/")}} className="ms-2" type='reset'>
                      Logout Account
                    </Button>
                  </Card.Body>
                </Card>
          </Col>
      </Row>  
      </Container>  
                <Modal show={show} onHide={handleClose} className='body-blur'>
                  <Modal.Header closeButton>
                    <Modal.Title style={{color:"black"}}>Profile Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit} className="mt-3">
                      <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
                      </Form.Group>

                      <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                      </Form.Group>

                      <Form.Group controlId="number" className="mb-3">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control required type="number" placeholder="Enter your email" value={phno} onChange={handlePhnoChange} />
                      </Form.Group>

                      <Form.Group controlId="location" className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control required type="text" placeholder="Enter your location" value={location} onChange={handleLocationChange} />
                      </Form.Group>

                      <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Profile Picture:</Form.Label>
                              <Form.Control type="text" placeholder="Enter Image url" value={avatar} onChange={handleAvatarChange} />
                      </Form.Group>
                      <center>
                      <Button variant="warning" type="submit">
                        Save Profile
                      </Button>
                      </center>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

      <Container>
      <Card className="mt-3 profile-bg">
        <Card.Body>
            <Card.Title>
              Purchase History <History/>
            </Card.Title>
            <hr/>
              <Container>
                <Row>
                  {purchaseDetails.map((purchase, index) => (
                    <GroceryPurchaseCard key={index} purchaseDetails={purchase}/>
                  ))}
                </Row>
              </Container>
        </Card.Body>
      </Card>
      </Container>

      </center>

      <Footer />
    </div>
    </>
  ):(
    <div>
    <Restriction/>
    </div>
   )}
  </>
  );
}

export default UserProfile;
