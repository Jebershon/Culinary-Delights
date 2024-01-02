import React from 'react';
import { Card, Col } from 'react-bootstrap';

const GroceryPurchaseCard = ({ purchaseDetails }) => {
  return (
        <Col lg={4} className="mt-3">
          <Card className="mt-3">
            <Card.Header>
              <strong>Recipe: {purchaseDetails.recipe_name}</strong>
            </Card.Header>
            <Card.Body className='overflow-y-scroll' style={{height:"10cm"}}>
              <Card.Text>
                <strong>User ID:</strong> {purchaseDetails.user_id}
              </Card.Text>
              <Card.Text>
                <strong>Recipe ID:</strong> {purchaseDetails.recipe_id}
              </Card.Text>
              <Card.Text>
                <strong>Purchase Date:</strong> {purchaseDetails.purchase_date}
              </Card.Text>
              <Card.Text>
                <strong>Total Cost:</strong> ${purchaseDetails.total_cost.toFixed(2)}
              </Card.Text>
              <Card.Text>
                <strong>Items:</strong>
                <ul>
                  {purchaseDetails.items.map((item) => (
                    <li key={item.product_id}>
                      {item.name} - {item.quantity} - ${item.price.toFixed(2)}
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
