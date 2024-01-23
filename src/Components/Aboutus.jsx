import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import './/Home.css';
import image from './Asserts/image.jpg';
import image1 from './Asserts/img1.jpeg';
import image2 from './Asserts/img2.jpg';
import image3 from './Asserts/img3.jpeg';
import CarouselSale from './Carousel-Sale';
import Footer from './Footer';
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
function Aboutus(){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <div className='bg-c'>
        <Navbar className="transparent-Nav">
            <Container>
            <Navbar.Brand>
            <BackBtn/>
            </Navbar.Brand>
            <div className='ABout-us-text'>
            <center>
               <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <p style={{fontSize:"50px"}}>About Us</p>
                    </div>
                <hr/>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",color:"white"}}>
                    <p style={{letterSpacing:"1rem",fontSize:"30px"}}>Eat The Best</p>
                    </div>
            </center>
            </div>
            </Container>
        </Navbar>

            <Container>
                <Row>
                    <Col>
                    <center>
                    <CarouselSale/>
                    </center>
                    <br/>
                    </Col>
                </Row>
            <div className='a-div1'>
            <Row>
               <Col> <center><img src={image} width={300} height={350}></img></center></Col>
               <Col><p style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis cum repellat quod? Quos nulla perspiciatis est, optio ut soluta doloribus, ad placeat minus totam itaque officia reiciendis dolores vel.
               Officia, maiores error est nulla perspiciatis porro, quasi dolorem consequuntur incidunt tenetur explicabo temporibus aperiam exercitationem consequatur corrupti labore debitis, quaerat veniam. Eum exercitationem quas nisi accusantium delectus laboriosam laborum!
               Harum perferendis totam cupiditate reiciendis ratione culpa blanditiis quaerat, unde molestiae numquam, obcaecati maxime assumenda possimus. Blanditiis illum doloremque excepturi quasi ut qui sunt aut asperiores ratione minima, numquam dolor?
               Laboriosam commodi nihil autem velit cupiditate nam, inventore maiores dolores modi quisquam nisi distinctio iure fugiat placeat eaque deleniti. Nisi quam cupiditate sunt error, vitae repellendus non consequuntur tempora numquam!
               Ipsam enim, eos amet animi explicabo mollitia eveniet minima necessitatibus harum! Hic tempore ad quo blanditiis! Voluptates, exercitationem ex ratione aspernatur harum explicabo reprehenderit dignissimos. Fugit ullam asperiores vero provident.
               </p>
               </Col>
            </Row>
            </div>
            <br/>
            <Row>
                <Col lg={4}>
                <Card className='card-bg' data-aos="fade-right">
                <Card.Img variant="top" src={image1} width={100} height={300} className='ig'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4}>
                <Card className='card-bg'>
                <Card.Img variant="top" src={image2} width={100} height={300} className='ig'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4}>
                <Card className='card-bg' data-aos="fade-left">
                <Card.Img variant="top" src={image3} width={100} height={300} className='ig'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            <br/>
            </Container>
            <center>
        <div className='foot'>
        <Footer/>
        </div>
        </center>
        </div>
    );
}
export default Aboutus;







