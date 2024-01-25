import { History } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import './/external.css';
import profile1 from './Asserts/female-1.jpg';
import profile2 from './Asserts/female-2.jpg';
import profile3 from './Asserts/female-avatar-profile.jpg';
import img from './Asserts/img-def.jpg';
import profile5 from './Asserts/male-1.jpg';
import profile6 from './Asserts/male-2.jpg';
import profile4 from './Asserts/male-avatar-profile.jpg';
import Footer from './Footer';
import GroceryPurchaseCard from './GroceryPurchaseCard';
import purchaseDetails from './purchaseDetails.js';
const BackBtn=()=>{
  return(
    <div>
      <a style={{textDecoration:"none"}} href='/'>
        <button class="Btn">
        <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
        <div class="in-text">Exit</div>
        </button>
      </a>
    </div>
  )
}
function UserProfile() {
  const [avatar, setAvatar] = useState(img);
  const [externalAvatar, setExternalAvatar] = useState('');
  const [storedProfile, setStoredProfile] = useState(null);

  const handleAvatarChange = (event) => {
    const selectedAvatar = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    if (selectedAvatar) {
      reader.readAsDataURL(selectedAvatar);
    }
  };

  const handleExternalAvatarChange = (event) => {
    setExternalAvatar(event.target.value);
  };

  const handleSelectAvatar = (selectedAvatar) => {
    setAvatar(selectedAvatar);
    setExternalAvatar('');
  };

  const avatars = [profile1,profile5,profile3,profile4, profile2,profile6];

  // =============================================================
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phno, setPhno] = useState('');
  const [joined, setJoined] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    setJoined(currentDate);
    // Store user profile data in a JSON object
    const userProfile = {
      name,
      email,
      phno,
      location,
      joined: currentDate,
    };
    setStoredProfile(userProfile);
  };

    console.log('Retrieved Profile:', storedProfile);

  // =============================================================
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
           <div>
           <BackBtn/>
           </div>
      <Container>

        <Row className="mt-5">
          <Col lg={3}>
            <Card className="mt-3">
              <Card.Img variant="top" src={avatar} />
              <Card.Body>
                <Card.Title>{storedProfile?.name}</Card.Title>
                <Card.Text>
                 {storedProfile?.location}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={9}>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Profile Information</Card.Title>
                <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Name:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.name}
                    aria-describedby="basic-addon1"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon2">Email:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.email}
                    aria-describedby="basic-addon2"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">Ph no:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.phno}
                    aria-describedby="basic-addon3"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon4">Location:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.location}
                    aria-describedby="basic-addon4"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                <Card.Text>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon5">Joined:</InputGroup.Text>
                  <Form.Control
                    placeholder={storedProfile?.joined}
                    aria-describedby="basic-addon5"
                    disabled
                  />
                </InputGroup>
                </Card.Text>
                <Card className="mt-3">
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      <strong>Change Avatar:</strong>
                    </Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={handleAvatarChange} />
                  </Form.Group>
                </Card>
                <Card className="mt-3">
                  <strong>Choose from Default Avatars:</strong>
                  <Row>
                    {avatars.map((avatarSrc, index) => (
                      <Col xs={2} key={index}>
                        <center>
                          <img
                            src={avatarSrc}
                            alt={`Avatar ${index + 1}`}
                            width={50}
                            height={50}
                            className="avatar-selection mt-2"
                            onClick={() => handleSelectAvatar(avatarSrc)}
                          />
                        </center>
                      </Col>
                    ))}
                    <br />
                  </Row>
                  <br />
                </Card>
                <Card className="mt-3" style={{width:"100%"}}>
                  <Card.Body>
                    <Card.Title>Account Settings</Card.Title>
                    <Card.Text>You can customize your account settings here.</Card.Text>
                    <Button variant="warning" onClick={handleShow}>
                      Edit Profile
                    </Button>
                    <Button variant="danger" className="ms-2" type='reset'>
                      Logout Account
                    </Button>
                  </Card.Body>
                </Card>
                </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>
                <Modal show={show} onHide={handleClose} className='modal-bg'>
                  <Modal.Header closeButton>
                    <Modal.Title style={{color:"black"}}>Profile Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Card className="mt-3">
                    <Form onSubmit={handleSubmit} style={{ margin: '5px' }}>
                      <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
                      </Form.Group>

                      <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                      </Form.Group>

                      <Form.Group controlId="number" className="mb-3">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="number" placeholder="Enter your email" value={phno} onChange={handlePhnoChange} />
                      </Form.Group>

                      <Form.Group controlId="location" className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter your location" value={location} onChange={handleLocationChange} />
                      </Form.Group>
                      <center>
                      <Button variant="warning" type="submit">
                        Save Profile
                      </Button>
                      </center>
                    </Form>
                  </Card>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
      <br/>
      <Container>
      <Card className="mt-3">
            <Card.Header>
              <strong>Purchase History <History/></strong>
            </Card.Header>
              <Container>
                <Row>
                  {purchaseDetails.map((purchase, index) => (
                    <GroceryPurchaseCard key={index} purchaseDetails={purchase} />
                  ))}
                </Row>
              </Container>
            </Card>
      </Container>
      <br />
      <Footer />
    </div>
  );
}

export default UserProfile;
