import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import './/Home.css';
import Footer from './Footer.jsx';

const HamsterAnimation = () => {
  return (
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
      <div class="wheel"></div>
      <div class="hamster">
        <div class="hamster__body">
          <div class="hamster__head">
            <div class="hamster__ear"></div>
            <div class="hamster__eye"></div>
            <div class="hamster__nose"></div>
          </div>
          <div class="hamster__limb hamster__limb--fr"></div>
          <div class="hamster__limb hamster__limb--fl"></div>
          <div class="hamster__limb hamster__limb--br"></div>
          <div class="hamster__limb hamster__limb--bl"></div>
          <div class="hamster__tail"></div>
        </div>
      </div>
      <div class="spoke"></div>
    </div>
    </div>
  );
};

const NutritionCalculator = () => {
  const [foodItems, setFoodItems] = useState('');
  const [nutritionData, setNutritionData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNutritionData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.edamam.com/api/nutrition-data', {
        params: {
          app_id: 'bd89b80d',
          app_key: 'f9e486b002b535a59e82aab0bc5059a0',
          ingr: foodItems,
        },
      });
      setNutritionData(response.data);
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchNutritionData();
  };

  return (
    <div className='a-body bg-c'>
      <header style={{ backgroundColor: "#212529" }}>
        <div>
          <center>
            <h1 className='n-head-text'>Nutritional Calculator</h1>
          </center>
        </div>
      </header>
      <div className="Back-button">
        <a href='/' style={{ textDecoration: "none" }}>
          <button class="bookmarkBtn">
            <span class="IconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </span>
            <p class="book-text">Back</p>
          </button>
        </a>
      </div>
      <br />
      <Container>
        <Row>
          <Col lg='6'>
            <Card className='Nutri-card'>
              <Card.Header className='nutri-font'>Enter food items (comma-separated):</Card.Header>
              <Card.Body>
                <form onSubmit={handleFormSubmit}>
                  <Form.Label htmlFor="inputPassword5"></Form.Label>
                  <Form.Control as="textarea" placeholder='Eg. 0kg/g item_name' value={foodItems} onChange={(e) => setFoodItems(e.target.value)} rows={10} />
                  <br></br>
                  <center><Button type="submit" className='butn-round'>Calculate Nutrition</Button></center>
                </form>
              </Card.Body>
            </Card>
            <br />
          </Col>

          <Col lg='6'>
            {/* Replace the spinner with the hamster animation component */}
            <Card className='Nutri-card'>
              <Card.Header className='nutri-font'>Nutritional Information:</Card.Header>
              <Card.Body>
                <center>
                {loading ? (
                  // Use the hamster animation component
                  <HamsterAnimation />
                ) : (
                  // Render Nutritional Information
                  <Table bordered striped responsive variant="dark">
                    {nutritionData && (
                      <div className='overflow-y-scroll' style={{ height: "8cm" }}>
                        {Object.entries(nutritionData.totalNutrients).map(([key, value]) => (
                          <tr key={key}>
                            <th>{value.label}:</th>
                            <td>{`${value.quantity}`}</td>
                            <td>{`${value.unit}`}</td>
                          </tr>
                        ))}
                      </div>
                    )}
                  </Table>
                )}
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <center>
        <div className='foot'>
          <Footer />
        </div>
      </center>
    </div>
  );
};

export default NutritionCalculator;
