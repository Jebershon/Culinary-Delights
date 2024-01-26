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
const BackBtn=()=>{
  return(
    <div>
      <a style={{textDecoration:"none"}} href='/'>
        <button class="Btn">
        <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
        <div class="in-text">Exit</div>
        </button>
      </a>
    </div>
  )
}
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
      <div>
           <div>
           <BackBtn/>
           </div>
           <center>
          <div>
              <h1 className='n-head-text'>Nutritional Calculator</h1>
          </div>
          </center>
      </div>
      
      <Container className='mt-5 mb-3'>
        <Row>
          <Col lg='6'>
            <Card className='Nutri-card' data-aos="fade-up-right" data-aos-duration="2000">
              <Card.Header className='nutri-font'>Enter food items (comma-separated):</Card.Header>
              <Card.Body>
                <form onSubmit={handleFormSubmit}>
                  <Form.Control as="textarea" className='nutri-inp' placeholder='Eg. 0kg/g item_name' value={foodItems} onChange={(e) => setFoodItems(e.target.value)} rows={10} />
                  <center><Button type="submit" className='card-btn mt-5'>Calculate Nutrition</Button></center>
                </form>
              </Card.Body>
            </Card>
            <br />
          </Col>

          <Col lg='6'>
            {/* Replace the spinner with the hamster animation component */}
            <Card className='Nutri-card' data-aos="fade-up-left" data-aos-duration="2000">
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
      <center>
          <Footer />
      </center>
    </div>
  );
};

export default NutritionCalculator;
