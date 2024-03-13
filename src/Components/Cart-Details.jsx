import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, Card, CloseButton, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ".//Cart.css";
function CartDetails() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  useEffect(() => {
    const token = jwtDecode(window.localStorage.getItem("token"));
    const userId = token.id;
    axios.get(`http://localhost:3001/getCartDetails/${userId}`)
      .then(response => {
        console.log("Fetched cart details:", response.data);
        // Simulate a delay of 1000ms (1 second) before setting loading to false
        setTimeout(() => {
          setCart(response.data);
          setLoading(false); // Set loading to false after fetching data
        }, 1000);
      })
      .catch(error => {
        console.error("Error fetching cart details:", error);
        // Simulate a delay of 1000ms (1 second) before setting loading to false in case of error
        setTimeout(() => {
          setLoading(false); // Set loading to false in case of error
        }, 1000);
      });
  }, []);

  const handleIncrement = (itemIndex) => {
    const updatedCart = [...cart];
    const oldCount = updatedCart[itemIndex].ingredientCount;
    const newCount = oldCount + 1;
    updatedCart[itemIndex].ingredientCount = newCount;

    const oldPrice = updatedCart[itemIndex].ingredientPrice;
    const newPrice = (oldPrice / oldCount) * newCount;
    updatedCart[itemIndex].ingredientPrice = newPrice;

    setCart(updatedCart);
    handleUpdateCartItem(updatedCart[itemIndex]._id, newCount, updatedCart[itemIndex].ingredientQuantity, newPrice);
};

const handleDecrement = (itemIndex) => {
    const updatedCart = [...cart];
    const oldCount = updatedCart[itemIndex].ingredientCount;
    if (oldCount > 0) {
        const newCount = oldCount - 1;
        updatedCart[itemIndex].ingredientCount = newCount;

        const oldPrice = updatedCart[itemIndex].ingredientPrice;
        const newPrice = (oldPrice / oldCount) * newCount;
        updatedCart[itemIndex].ingredientPrice = newPrice;

        setCart(updatedCart);
        handleUpdateCartItem(updatedCart[itemIndex]._id, newCount, updatedCart[itemIndex].ingredientQuantity, newPrice);
    }
};

  const handleRemoveItem = (itemId, itemIndex) => {
    const token = jwtDecode(window.localStorage.getItem("token"));
    const userId = token.id;
    axios.delete(`http://localhost:3001/removeCartItem/${userId}/${itemId}`)
      .then(response => {
        console.log(response.data);
        const updatedCart = cart.filter((_, index) => index !== itemIndex);
        setCart(updatedCart);
      })
      .catch(error => {
        console.error("Error removing cart item:", error);
      });
  };

  const handleUpdateCartItem = (itemId, count, quantity, price) => {
    const token = jwtDecode(window.localStorage.getItem("token"));
    const userId = token.id;
    const updatedPrice = price;
    console.log( typeof(updatedPrice)+" "+typeof(quantity)+" "+typeof(count));
    console.log("updatedPrice:", updatedPrice);
    console.log("quantity:", quantity);
    console.log("count:", count);
    axios.put(`http://localhost:3001/updateCartItem/${userId}/${itemId}`, { count, quantity, price: updatedPrice })
      .then(response => {
        console.log(response.data);
        const updatedCart = cart.map(item => {
          if (item._id === itemId) {
            return { ...item, ingredientCount: count, ingredientQuantity: quantity, ingredientPrice: updatedPrice };
          }
          return item;
        });
        console.log(updatedCart); 
        setCart(updatedCart); 
      })
      .catch(error => {
        console.error("Error updating cart item:", error); // Log the error if axios request fails
        // Optionally, you can provide user feedback here, such as displaying an error message
      });
  };
  

  

  return (
    <Container>
      <br />
      <br />
      <Container>
      {loading ? ( 
         <div class="spinner center">
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         <div class="spinner-blade"></div>
         </div>
        ) : (
         cart.length > 0 ? (
          cart.map((item, index) => (
            <Card key={index} className="mb-3">
              <Row>
                <Col><Card.Img src={item.ingredientURL} style={{ width: "100px", height: "100px" }} /></Col>
                <Col><div className="mt-5">Quantity  :  {item.ingredientQuantity}g</div></Col>
              </Row>
              <Card.Header>{item.ingredientName}</Card.Header>
              <Row className="text-center">
                <Col>
                  <Card.Text className="mt-3 mb-2 mar">₹{item.ingredientPrice}</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="mt-2 mb-2">
                    <InputGroup className="input-group">
                      <Button variant="outline-warning" id={`button-addon1-${index}`} onClick={() => handleDecrement(index)}>-</Button>
                      <Form.Control
                        aria-label="Example text with button addon"
                        width="30px"
                        aria-describedby={`basic-addon1-${index}`}
                        className="quantity-field"
                        value={item.ingredientCount}
                      />
                      <Button variant="outline-warning" id={`button-addon2-${index}`} onClick={() => handleIncrement(index)}>+</Button>
                    </InputGroup>
                  </Card.Text>
                </Col>
                <Col className="mt-3 mb-2">
                  <CloseButton onClick={() => handleRemoveItem(item._id, index)} />
                </Col>
              </Row>
            </Card>
         ))
         ) : (
           <p>Your cart is empty</p>
         )
       )}
      </Container>
    </Container>
  );
}

export default CartDetails;
