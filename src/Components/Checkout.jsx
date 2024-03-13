import axios from "axios";
import React, { useState,useEffect } from "react";
import { Button, Card, CloseButton, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import gpay from './Asserts/gpay.png';
import phonepe from './Asserts/phonepe.png';
import paytm from './Asserts/paytm.png';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ".//Cart.css";
import './/Checkout.css'
import { jwtDecode } from "jwt-decode";
export default function Checkout(){
    const [cart, setCart] = useState([]);
    const [storedProfile, setStoredProfile] = useState(null);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [phno, setPhno] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState("");
   
    useEffect(() => {
      const token = jwtDecode(window.localStorage.getItem("token"));
      if (token.id) {
        setId(token.id);
      }
      else {
        setId(" ");
      }
    }, []);
  
    useEffect(() => {
      if (id) {
        axios.get(`http://localhost:3001/FindUser/${id}`)
          .then(result => {
            console.log("Found user:", result.data);
            const userData = result.data;
            setName(userData.name);
            setLocation(userData.location);
            setPhno(userData.phoneNumber);
            setEmail(userData.email);
            setStoredProfile(userData);
            }).catch(err => console.log(err));
      }
    }, [id]);

    useEffect(() => {
        const token = jwtDecode(window.localStorage.getItem("token"));
        const userId = token.id;
    axios.get(`http://localhost:3001/getCartDetails/${userId}`)
    .then(response => {
      console.log("Fetched cart details:", response.data);
        setCart(response.data);
    }).catch(error => {
      console.error("Error fetching cart details:", error);
    })}, []);

    const totalCost = cart.reduce((total, item) => {
        return total + (item.ingredientPrice);
    }, 0);
    console.log(totalCost);
    return(
        <>
        <ToastContainer/>
        <Container className="mt-4 mb-3">
            <h1>Checkout</h1>
            <hr/>
            <Row>
                <Col>
                    <Card className="p-4 mb-3">
                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder={storedProfile?.email} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="password" placeholder={storedProfile?.name} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control  placeholder={storedProfile?.location}/>
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Card>
                    <Button variant="btn btn-warning" type="submit">
                     Continue
                    </Button>
                    </Card>
                    </Form>
                    </Card>
                </Col>
                <Col>
                <div style={{ maxHeight: "440px", overflowY: "auto" }}>
                <center>
                {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <Card key={index} className="mb-3" style={{width:"350px"}}>
                            <Row>
                                <Col><Card.Img src={item.ingredientURL} style={{ width: "100px", height: "100px" }} /></Col>
                                <Col><div className="mt-5">Quantity  :  {item.ingredientQuantity}g</div></Col>
                            </Row>
                            <Card.Header>{item.ingredientName} : ₹{item.ingredientPrice}</Card.Header>
                            </Card>
                        ))
                        ) : (
                        <p>Your cart is empty</p>
                        )}
                </center>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="mt-3">
                     <Card.Header>Order to:</Card.Header>
                     <Card.Body>
                     <p>{storedProfile?.name} : {storedProfile?.location}</p>
                     </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="mt-3">
                     <Card.Header>Payment:</Card.Header>
                     <Card.Body>
                     Total Cost :
                     <Form.Control value={totalCost} disabled></Form.Control>
                    <Row>
                    <center>
                      <button className="pay" onClick={()=>{toast.success("Order placed Successful!");}}> pay with <img width={80} height={40} src={gpay}></img></button>
                      &nbsp;&nbsp;
                      <button className="pay" onClick={()=>{toast.success("Order placed Successful!");}}> pay with <img width={80} height={40} src={phonepe}></img></button>
                      &nbsp;&nbsp;
                      <button className="pay" onClick={()=>{toast.success("Order placed Successful!");}}> pay with <img width={80} height={40} src={paytm}></img></button>
                    </center>
                    </Row>
                     </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}