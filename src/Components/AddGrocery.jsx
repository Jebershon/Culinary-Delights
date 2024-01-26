import React, { useState } from 'react';
import { Button, Card, Col, Dropdown, Form, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap';
import './/external.css';
import img from './Asserts/img-def.jpg';
const categories = ["vegetable", "fruit", "dairy", "meat", "grains", "beverages"];
const quantityUnits = ["50g", "100g", "500g", "750g"];
const measuringUnits = ["g", "kg", "liters", "pieces", "tbsp"];

export default function AddGrocery() {
  const [product_id, setProductId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [image_url, setImageUrl] = useState(img);
  const [category, setCategory] = useState('');
  const [unit, setUnit] = useState('');

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
    // Clear the form fields after handling the data
    // setProductId('');
    // setName('');
    // setQuantity('');
    // setPrice('');
    // setImageUrl('');
    // setCategory('');
  };

  return (
    <Card className='Admincard-bg'>
    <Card.Header><h1 style={{ fontVariant:"small-caps"}}>Grocery Dashboard</h1></Card.Header>
    <Card.Body>
    <Form>
    <Row>
      <Col lg={9}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"80px"}}>Product ID</FormLabel></InputGroup.Text>
                <FormControl
                type="text"
                placeholder="Enter product ID"
                value={product_id}
                onChange={(e) => setProductId(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"80px"}}>Name</FormLabel></InputGroup.Text>
                <FormControl
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"> <FormLabel style={{ fontVariant:"small-caps",width:"80px"}}>Price</FormLabel></InputGroup.Text>
                <FormControl
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"80px"}}>Image URL</FormLabel></InputGroup.Text>
                <FormControl
                type="text"
                placeholder="Enter image URL"
                onChange={(e) => setImageUrl(e.target.value)}
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
            <Button variant="warning" className='mt-3 mb-3' onClick={handleAddGrocery} style={{ fontVariant:"small-caps" , width:"50%"}}>
                Add Grocery
            </Button></Col>
            </center></Row>
    </Form>
    </Card.Body>
    </Card>
  );
}
