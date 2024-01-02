import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './/Home.css';
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
    <center>
    <center>
    <div style={{width:"100%"}}>
    <Navbar/>
    </div>
    </center>

    <br/>
    <br/>

    <div>
    <Container>
    <CarouselSale/>
    </Container>
    </div>

    <br/>

    <center>
    <div>
    <Container>
        <Row xs={1} md={2}>
          <Col lg={4}>
          <Card className='card-bg'>
                <Card.Img variant="top" src={img3} width={100} height={300}className='ig' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
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
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
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
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
          </Card>
          <br/>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col lg={4}>
          <Card className='card-bg'>
                <Card.Img variant="top" src={img3} width={100} height={300}className='ig' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
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
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
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
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
          </Card>
          <br/>
          </Col>
        </Row>
        </Container>
        </div>
        </center>

        <br/>

        <center>
        <div className='foot'>
        <Footer/>
        </div>
        </center>

      </center>
      </div>
  );
}

export default Home;