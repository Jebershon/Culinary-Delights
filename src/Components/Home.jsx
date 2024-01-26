import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './/Home.css';
import './/external.css';
import img1 from './Asserts/img1.jpeg';
import img2 from './Asserts/img2.jpg';
import img3 from './Asserts/img3.jpeg';
import CarouselSale from './Carousel-Sale.jsx';
import Footer from './Footer.jsx';
import Navbar from './NavBar.jsx';
function Home() {
  /////////////////the price is must be specified per 100g
  return (
    <div className='bg-c'>
    <Container>
      <Row>
      <div>
      <Navbar/>
      </div>
      </Row>

      <Row>
      <div className='mt-5'>
      <Container>
      <CarouselSale/>
      </Container>
      </div>
      </Row>
<center>
        <Row className='mt-4 p-3'>
          <Col lg={3}>
          <img src='https://preview.colorlib.com/theme/cuisines/images/img_4.jpg' width="250px" height="200px" alt=""></img>
          </Col>

          <Col lg={3} data-aos="fade-up" data-aos-duration="2000" className='mt-3 mb-3'>
          <div class="p-tag-2">
          <h5>Lorem ipsum dolor</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate harum dolore mollitia, quos corrupti? sit amet consectetur adipisicing sit amet consectetur adipisicing</p>
          <Link  class="primary-btn" to='./Recipes'>recipe</Link>
          </div>
          </Col>

          <Col lg={3}>
          <img src='https://preview.colorlib.com/theme/cuisines/images/img_1.jpg' width="250px" height="200px" alt=""></img>
          </Col>

          <Col lg={3} data-aos="fade-up" data-aos-duration="2000" className='mt-3 mb-3'>
          <div class="p-tag-2">
          <h5>Lorem ipsum dolor</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate harum dolore mollitia, quos corrupti? sit amet consectetur adipisicing sit amet consectetur adipisicing</p>
          <Link  class="primary-btn" to='./Recipes'>recipe</Link>
          </div>
          </Col>

        </Row>
        <hr/>
        <Row className='mt-3 p-3'>

          <Col lg={3} data-aos="fade-up" data-aos-duration="2000" className='mt-3 mb-3'>
          <div class="p-tag-2">
          <h5>Lorem ipsum dolor</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate harum dolore mollitia, quos corrupti? sit amet consectetur adipisicing sit amet consectetur adipisicing</p>
          <Link  class="primary-btn" to='./Recipes'>recipe</Link>
          </div>
          </Col>

          <Col lg={3}>
          <img src='https://preview.colorlib.com/theme/cuisines/images/img_2.jpg' width="250px" height="200px" alt=""></img>
          </Col>

          <Col lg={3} data-aos="fade-up" data-aos-duration="2000" className='mt-3 mb-3'>
          <div class="p-tag-2">
          <h5>Lorem ipsum dolor</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate harum dolore mollitia, quos corrupti? sit amet consectetur adipisicing sit amet consectetur adipisicing</p>
          <Link  class="primary-btn" to='./Recipes'>recipe</Link>
          </div>
          </Col>

          <Col lg={3}>
          <img src="https://preview.colorlib.com/theme/cuisines/images/img_3.jpg" width="250px" height="200px" alt="" />
          </Col>
        </Row>
</center>
<center>
    <div>
        <Row className='mt-5 mb-3 p-1'>
          <Col lg={4}>
          <Card className='card-bg'>
                <Card.Img variant="top" src={img3} width={100} height={300}className='ig' />
                <Card.Body>
                    <Card.Title className='card-title'>Most Healthiest Food</Card.Title>
                    <Card.Text className='card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <br/>
          </Col>
          <Col lg={4}>
          <Card className='card-bg'>
                <Card.Img variant="top" src={img2} width={100} height={300} className='ig'/>
                <Card.Body>
                    <Card.Title className='card-title'>Vegan vs Meat Eaters</Card.Title>
                    <Card.Text className='card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <br/>
          </Col>
          <Col lg={4}>
          <Card className='card-bg'>
                <Card.Img variant="top" src={img1} width={100} height={300} className='ig' />
                <Card.Body>
                    <Card.Title className='card-title'>Preservative Vegetables?</Card.Title>
                    <Card.Text className='card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
          </Card>
          <br/>
          </Col>
        </Row>
        </div>
</center>
<center>
        <Row className='mt-3 mb-3 p-1' style={{backgroundColor:"black",borderRadius:'20px'}}>
        <Col lg={6} className='home-left p-5'  data-aos="fade-up" data-aos-duration="2000">
        <h1 className='h1-tag'>About Our Story</h1>
        <p className='p-tag' style={{width:"85%"}}>
        Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link  class="primary-btn" to='./Recipes'>view full menu</Link>
        </Col>
        <Col lg={6}  data-aos="fade-up">
        <img className="img-fluid mt-2 mb-2" src="https://preview.colorlib.com/theme/marco/img/about-img.jpg" alt="image"/>
        </Col>
        </Row>

        <Row className='mt-3 mb-3 p-1' style={{backgroundColor:"black",borderRadius:'20px'}}>
        <Col lg={6}   data-aos="fade-up">
        <img className="img-fluid mt-2 mb-2" src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg" alt="image"/>
        </Col>
        <Col lg={6} className='home-left p-5'   data-aos="fade-up" data-aos-duration="2000">
        <h1 className='h1-tag'>About Our Story</h1>
        <p className='p-tag' style={{width:"85%"}}>
        Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link  class="primary-btn" to='./Recipes'>view full Item</Link>
        </Col>
        </Row>
</center>
      </Container>
        <div>
        <Footer/>
        </div>
      </div>
  );
}

export default Home;