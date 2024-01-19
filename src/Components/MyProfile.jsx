import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import profile3 from './Asserts/girl-Female.jpeg';
import img from './Asserts/img-def.jpg';
import profile4 from './Asserts/male-avatar-profile.jpg';
import Footer from './Footer';
import GroceryPurchaseCard from './GroceryPurchaseCard';
import purchaseDetails from './purchaseDetails.js';

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

  const avatars = [profile3, profile4];

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
  const [isFormVisible, setFormVisibility] = useState(false);
  const toggleForm = () => {
    setFormVisibility(!isFormVisible);
  };

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={3}>
            <Card className="mt-3">
              <Card.Img variant="top" src={avatar} />
              <Card.Body>
                <Card.Title>{storedProfile?.name}</Card.Title>
                <Card.Text>
                 {storedProfile?.location}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  <strong>Change Avatar</strong>
                </Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleAvatarChange} />
              </Form.Group>
            </Card>
            <Card className="mt-3">
              <strong>Choose from Avatars:</strong>
              <Row>
                {avatars.map((avatarSrc, index) => (
                  <Col xs={6} key={index}>
                    <center>
                      <img
                        src={avatarSrc}
                        alt={`Avatar ${index + 1}`}
                        width={100}
                        height={100}
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
          </Col>
          <Col>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Profile Information</Card.Title>
                <Card.Text>
                  <strong>Name:</strong> {storedProfile?.name}
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> {storedProfile?.email}
                </Card.Text>
                <Card.Text>
                  <strong>Ph no:</strong> {storedProfile?.phno}
                </Card.Text>
                <Card.Text>
                  <strong>Location:</strong> {storedProfile?.location}
                </Card.Text>
                <Card.Text>
                  <strong>Joined:</strong> {storedProfile?.joined}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Account Settings</Card.Title>
                <Card.Text>You can customize your account settings here.</Card.Text>
                <Button variant="primary" onClick={toggleForm}>
                  {isFormVisible ? 'Cancel Edit' : 'Edit Profile'}
                </Button>
                <Button variant="danger" className="ms-2">
                  Logout Account
                </Button>
              </Card.Body>
            </Card>

            {isFormVisible && (
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

                  <Button variant="primary" type="submit">
                    Save Profile
                  </Button>
                </Form>
              </Card>
            )}

            <Card className="mt-3">
            <Card.Header>
              <strong>Purchase Details</strong>
            </Card.Header>
              <Container>
                <Row>
                  {purchaseDetails.map((purchase, index) => (
                    <GroceryPurchaseCard key={index} purchaseDetails={purchase} />
                  ))}
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  );
}

export default UserProfile;
