import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './/Home.css';
import image from './Asserts/image.jpg';
import image1 from './Asserts/img1.jpeg';
import image2 from './Asserts/img2.jpg';
import image3 from './Asserts/img3.jpeg';
import CarouselSale from './Carousel-Sale';
import Footer from './Footer';
function Aboutus(){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <div className='a-body bg-c'>
        <header style={{backgroundColor:"#212529"}}>
        <div>
        <center>
               <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <p style={{fontSize:"50px",color:"#ee7752"}}>About Us</p>
                    </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <p style={{color:"white",letterSpacing:"1rem",fontSize:"20px"}}>Eat The Best</p>
                    </div>
        </center>
        </div>
        </header>
        <div>
            &nbsp;
        </div>
                <a href='/' style={{textDecoration:"none"}}>
                    <button class="bookmarkBtn">
                    <span class="IconContainer"> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                    </span>
                    <p class="book-text">Back</p>
                    </button>
                </a>
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







