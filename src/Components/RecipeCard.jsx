import { default as React } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import './/Home.css';
import Anim from './Asserts/Anim.jsx';
const RecipeCard = ({ recipe }) => {
  const { name, description, ingredients, steps, servings, prep_time, cook_time, total_time } = recipe;
  return (
    <div>
        <Card className="recipe-card" data-aos="fade-up" data-aos-duration="1000">
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className='scroll' style={{height:"10cm"}}>
            <Card.Text>
            <strong>Ingredients:</strong>
            </Card.Text>
            <ListGroup>
            {ingredients?.map((ingredient, index) => (
                <ListGroupItem key={index}>{`${ingredient.quantity} ${ingredient.name}`}</ListGroupItem>
            ))}
            </ListGroup>

            <Card.Text>
            <strong>Steps:</strong>
            </Card.Text>
            <ol>
            {steps?.map((step, index) => (
                <li key={index}>{step}</li>
            ))}
            </ol>
            <Card.Text>Servings: {servings}</Card.Text>
            <Card.Text>Prep Time: {prep_time}</Card.Text>
            <Card.Text>Cook Time: {cook_time}</Card.Text>
            <Card.Text>Total Time: {total_time}</Card.Text>
            <br/>
            </div>
        </Card.Body>
        <center>
       <Row>
       <Col></Col>
       <Col xs={6} className='justify-content-center'>
            <button className="CartBtn">
                <span className="IconCon"> 
                <Anim/>
                </span>
                <p className="text">Add to Cart</p>
            </button>
        </Col>
        <Col></Col>
        </Row>
        </center>
        </Card>
        <br/>
        </div>
  );
};

export default RecipeCard;
