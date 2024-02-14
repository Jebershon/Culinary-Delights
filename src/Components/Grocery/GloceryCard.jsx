import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Anim from '../Asserts/Anim.jsx';
import '../Home-2.css';
import '../Home.css';
const GloceryCard=({ingre})=>{
    const {product_id,name,quantity,price,image_url}=ingre;
    let [count, setCount] = useState(1);
    const [Data,setData]=useState(50);
    const pro_price=price/100*Data*count;
    function incrementCount() {
      count = count + 1;
      setCount(count);
    }
    function decrementCount() {
    if(count!=0){
      count = count - 1;
      setCount(count);
    }
    else{
        setCount(0);
    }
    }
    const handleChange = (selected) => {
        setData(selected);
      };
    return(
        <div id={product_id} data-aos="zoom-in" data-aos-duration="1000">
        <Card className="recipe-card">
        <Card.Img variant="top" src={image_url} width={30} height={350} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <hr className="card-divider"/>
            <div className="card-footer">
                <Container>
                    <Row>
                    <Col xs={12}>
                        <div className="card-price"> 
                        <InputGroup className="mb-3">
                            <DropdownButton
                            variant="outline-warning"
                            title={`Quantity ${Data}g`}
                            id="input-group-dropdown-1"
                            onSelect={handleChange}
                            >
                            <Dropdown.Item eventKey="50">50g</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="100">100g</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="500">500g</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="750">750g</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control
                                    width="30px"
                                    aria-describedby="basic-addon1"
                                    className="quantity-field"
                                    value={`₹ ${pro_price}`}
                                />
                        </InputGroup>
                        </div>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col xs={6} className='justify-content-center'>
                        <div>
                            <InputGroup className="mb-3 input-group">
                                <Button variant="outline-warning" id="button-addon1" onClick={decrementCount}>-</Button>
                                <Form.Control
                                    aria-label="Example text with button addon"
                                    width="30px"
                                    aria-describedby="basic-addon1"
                                    className="quantity-field"
                                    value={count}
                                />
                                <Button variant="outline-warning" id="button-addon2" onClick={incrementCount}>+</Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col xs={6} className='justify-content-center'>
                        <button className="CartBtn">
                            <span className="IconCon"> 
                            <Anim/>
                            </span>
                            <p className="text">Add to Cart</p>
                        </button>
                    </Col>
                    </Row>
                </Container>
            </div>
        </Card.Body>
        </Card>
        <br/>
        <br/>
        </div>
    );
}
export default GloceryCard;