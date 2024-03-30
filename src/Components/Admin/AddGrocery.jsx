import { BarChart, LocalDining, LocalGroceryStore, Shop, StoreMallDirectory, ViewAgenda } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, FormControl, FormLabel, InputGroup, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '..//external.css';
import logo from '../Asserts/dinner.png';
import Restriction from '../Restriction.jsx';
import img from '../Asserts/img-def.png';
const categories = ["vegetable", "fruit", "dairy", "meat", "grains", "beverages"];
const quantityUnits = ["50", "100", "500", "750"];
const measuringUnits = ["g", "kg","ml","liters", "pieces", "tbsp"];

export default function AddGrocery() {
  const [product_id, setProductId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [image_url, setImageUrl] = useState(img);
  const [category, setCategory] = useState('');
  const [unit, setUnit] = useState('');
 const navigate = useNavigate();
  const handleAddGrocery = () => {
    const groceryData = {
      product_id,
      name,
      quantity,
      price: parseInt(price),
      image_url,
      category,
      unit,
    };
    console.log('Added Grocery Data:', groceryData);
    axios.post('https://culinary-delights-backend.onrender.com/AddGrocery',groceryData)
      .then(result => {
        console.log(result);
        alert("Grocery Added Successfully");
      })
      .catch(err => console.log(err));
    // Clear the form fields after handling the data
    setProductId('');
    setName('');
    setQuantity('');
    setPrice('');
    setImageUrl(img);
    setCategory('');
  };
  const [display,setDisplay]=useState(window.localStorage.getItem("role"));
  return (
    <>
    {display?(
    <>
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
                    <center><Nav.Link className='navi nav-text' onClick={() => navigate('//AdminDash')}><BarChart style={{color:"white"}}/> Home</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/AddRecipe')}><LocalDining style={{color:"white"}}/> AddRecipe</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/ViewRecipe')}><ViewAgenda style={{color:"white"}}/> ViewRecipe</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/AddGrocery')}><LocalGroceryStore style={{color:"white"}}/> AddGrocery</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/ViewGrocery')}><StoreMallDirectory style={{color:"white"}}/> ViewGrocery</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/Sold')}><Shop style={{color:"white"}}/> Sold</Nav.Link></center>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>
              </div>
        </Col>
    </Row>

    <div className='mt-5 mb-3'>
    <Container>
    <Card className='Admincard-bg'>
    <Card.Header><h1 style={{ fontVariant:"small-caps"}}>Grocery Dashboard</h1></Card.Header>
    <Card.Body>
    <Form onSubmit={handleAddGrocery} >
    <Row>
      <Col lg={9}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"80px"}}>Product ID</FormLabel></InputGroup.Text>
                <FormControl
                type="text"
                placeholder="Enter product ID"
                value={product_id}
                onChange={(e) => setProductId(e.target.value)}
                required
                />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"80px"}}>Name</FormLabel></InputGroup.Text>
                <FormControl
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"> <FormLabel style={{ fontVariant:"small-caps",width:"80px"}}>Price</FormLabel></InputGroup.Text>
                <FormControl
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"80px"}}>Image URL</FormLabel></InputGroup.Text>
                <FormControl
                type="text"
                placeholder="Enter image URL"
                onChange={(e) => setImageUrl(e.target.value)}
                required
                />
            </InputGroup>
            </Col>
            <Col lg="3">
            <img src={image_url} className="mt-1 mb-2" style={{width:"220px", height:"220px",borderRadius:"5px"}}></img>
            </Col>
    </Row>
            <Row>
                <Col lg={4} className='mb-3'>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"150px"}}>Quantity</FormLabel></InputGroup.Text>
                    <Dropdown onSelect={(eventKey) => setQuantity(eventKey)} style={{width:"100px"}}>
                        <Dropdown.Toggle variant="warning" id="quantity-dropdown">
                        {quantity ? quantity : 'Select quantity'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        {quantityUnits.map((unit) => (
                            <Dropdown.Item key={unit} eventKey={unit} style={{ fontVariant:"small-caps"}}>
                            {unit}
                            </Dropdown.Item>
                        ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    </InputGroup>
                </Col>
                <Col lg={4} className='mb-3'>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"150px"}}>Category</FormLabel></InputGroup.Text>
                        <Dropdown onSelect={(eventKey) => setCategory(eventKey)}>
                        <Dropdown.Toggle variant="warning" id="category-dropdown">
                            {category ? category : 'Select category'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {categories.map((cat) => (
                            <Dropdown.Item key={cat} eventKey={cat} style={{ fontVariant:"small-caps"}}>
                                {cat}
                            </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>
                </Col>
                <Col lg={4} className='mb-3'>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps", width: "150px" }}>Unit</FormLabel></InputGroup.Text>
                  <Dropdown onSelect={(eventKey) => setUnit(eventKey)}>
                    <Dropdown.Toggle variant="warning" id="unit-dropdown">
                      {unit ? unit : 'Select unit'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {measuringUnits.map((unit) => (
                        <Dropdown.Item key={unit} eventKey={unit} style={{ fontVariant:"small-caps" }}>
                          {unit}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </InputGroup>
              </Col>
            </Row>

             <Row><center><Col lg={4}>
            <Button type="submit" variant="warning" className='mt-3 mb-3' style={{ fontVariant:"small-caps" , width:"50%"}}>
                Add Grocery
            </Button></Col>
            </center></Row>
    </Form>
    </Card.Body>
    </Card>
    </Container>
    </div>
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
