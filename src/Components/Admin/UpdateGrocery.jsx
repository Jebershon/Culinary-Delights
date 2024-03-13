import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Dropdown, Form, FormControl, FormLabel, InputGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import '..//external.css';
import img from '../Asserts/img-def.png';
const categories = ["vegetable", "fruit", "dairy", "meat", "grains", "beverages"];
const quantityUnits = ["50", "100", "500", "750"];
const measuringUnits = ["g", "kg","ml","liters", "pieces", "tbsp"];

export default function UpdateGrocery() {
  const{id} = useParams();
  const [product_id, setProductId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState(0);
  const [image_url, setImageUrl] = useState(img);
  const [category, setCategory] = useState('');
  const [unit, setUnit] = useState('');
 const navigate = useNavigate();

 useEffect(() => {
  axios.get('http://localhost:3001/FindGrocery/'+id)
    .then(result => {console.log(result);
      setProductId(result.data.id);
      setName(result.data.name);
      setQuantity(result.data.quantity);
      setPrice(result.data.price);
      setImageUrl(result.data.image_url);
      setCategory(result.data.category);
      setUnit(result.data.unit);
    })
    .catch(err => console.log(err))}, []);

  const handleUpdateGrocery = (e) => {
    e.preventDefault(); 
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

    axios.put('http://localhost:3001/UpdateGrocery/'+id,groceryData)
      .then(result => {
        console.log(result);
        alert("Grocery Added Successfully");
        navigate('/AdminDash/ViewGrocery');
      })
      .catch(err => console.log(err));
    // Clear the form fields after handling the data
    setProductId('');
    setName('');
    setQuantity('');
    setPrice('');
    setImageUrl(img);
    setCategory('');
    setUnit('');
  };
  return (
    <div className='mt-5 mb-3'>
    <Container>
    <center>
    <Card className='Admincard-bg mt-3 mb-3' style={{width:"400px"}}>
    <center>
    <Card.Header><h1 style={{ fontVariant:"small-caps"}}>Update Grocery</h1></Card.Header>
    </center>
    <Card.Body>
    <Form onSubmit={handleUpdateGrocery}>
    <center>
            <img src={image_url} className="mt-1 mb-2" style={{width:"250px", height:"250px",borderRadius:"5px"}}></img>
   </center>
   <br/>
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
            <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"120px"}}>Image URL</FormLabel></InputGroup.Text>
                <FormControl
                type="text"
                placeholder="Enter image URL"
                value={image_url}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                />
            </InputGroup>
                    <InputGroup className="mb-3 text-center">
                    <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"200px"}}>Quantity</FormLabel></InputGroup.Text>
                    <Dropdown onSelect={(eventKey) => setQuantity(eventKey)}>
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
    
                    <InputGroup className="mb-3 text-center">
                    <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"200px"}}>Category</FormLabel></InputGroup.Text>
                        <Dropdown onSelect={(eventKey) => setCategory(eventKey)} style={{width:"100px"}}>
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
             
                    <InputGroup className="mb-3 text-center">
                      <InputGroup.Text id="basic-addon1"><FormLabel style={{ fontVariant:"small-caps",width:"200px"}}>Unit</FormLabel></InputGroup.Text>
                      <Dropdown onSelect={(eventKey) => setUnit(eventKey)} style={{width:"100px"}}>
                        <Dropdown.Toggle variant="warning" id="unit-dropdown">
                          {unit ? unit : 'Select unit'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {measuringUnits.map((unit) => (
                            <Dropdown.Item key={unit} eventKey={unit} style={{fontVariant:"small-caps"}}>
                              {unit}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
            <center>
            <Button type='submit' variant="warning" className='mt-3 mb-3' style={{ fontVariant:"small-caps",width:"100%"}}>
                Update Grocery
            </Button>
            </center>
            
    </Form>
    </Card.Body>
    </Card>
    </center>
    </Container>
    </div>
  );
}
