import { default as React } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Anim from '../Asserts/Anim.jsx';
import '../Home.css';
const RecipeCard = ({ recipe,onAddToCart}) => {
  const { name, description, ingredients, steps, servings, prepTime, cookTime, totalTime } = recipe;
  const handleAddToCart = () => {
    const data={
        ingredients
    }
    onAddToCart(data);
    console.log(data);
  };
  return (
    <div>
        <Card className="recipe-card" data-aos="zoom-in-up" data-aos-duration="1000">
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className='scroll' style={{height:"10cm"}}>
            <Card.Text>{description}</Card.Text>
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
            <Card.Text>Prep Time: {prepTime}</Card.Text>
            <Card.Text>Cook Time: {cookTime}</Card.Text>
            <Card.Text>Total Time: {totalTime}</Card.Text>
            <br/>
            </div>
            
        </Card.Body>
        <center>
       <Row>
       <Col></Col>
       <Col xs={6} className='justify-content-center'>
            <button className="CartBtn" onClick={handleAddToCart}>
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
