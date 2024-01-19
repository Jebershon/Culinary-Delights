import React from 'react';
import { Card, Col } from 'react-bootstrap';

const GroceryPurchaseCard = ({ purchaseDetails }) => {
  return (
        <Col lg={4} className="mt-3">
          <Card className="mt-3">
            <Card.Header>
              <strong>Recipe: {purchaseDetails.recipeName}</strong>
            </Card.Header>
            <Card.Body className='overflow-y-scroll' style={{height:"10cm"}}>
              <Card.Text>
                <strong>Recipe ID:</strong> {purchaseDetails.recipeId}
              </Card.Text>
              <Card.Text>
                <strong>Purchase Date:</strong> {purchaseDetails.purchaseDate}
              </Card.Text>
              <Card.Text>
                <strong>Total Cost:</strong> {purchaseDetails.totalPrice}
              </Card.Text>
              <Card.Text>
                <strong>Items:</strong>
                <ul>
                  {purchaseDetails.groceryItems.map((item) => (
                    <li key={item.product_id}>
                      {item.name} - {item.quantity}
                    </li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  );
};

export default GroceryPurchaseCard;
