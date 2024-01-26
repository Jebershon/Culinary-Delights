import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './/Home.css';
import './/external.css';
import image from './Asserts/image.png';
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
        <div className='banner'>

            <div className="transparent-banner-over">
                <div>
                <BackBtn/>
                </div>

                <div className='ABout-us-text'>
                <center>
                        <div>
                            <p style={{fontSize:"50px"}}>About Us</p>
                        </div>
                        <div>
                            &nbsp;
                        <hr style={{width:"250px"}}/>
                        </div>
                        <div>
                            <p style={{fontSize:"20px",letterSpacing:"10px"}}>Eat The Best</p>
                        </div>
                        <div>
                        <h3 className='banner-text'>Fresh and Delicious Food For your Health</h3>
                        </div>
            </center>
            </div>
            </div>

            <Container>
            <Row className='a-div1 mb-4'>
               <Col data-aos="fade-right" data-aos-duration="2000"> <center><img src={image} width={300} height={350}></img></center></Col>
               <Col data-aos="fade-left" data-aos-duration="2000"><p style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis cum repellat quod? Quos nulla perspiciatis est, optio ut soluta doloribus, ad placeat minus totam itaque officia reiciendis dolores vel.
               Officia, maiores error est nulla perspiciatis porro, quasi dolorem consequuntur incidunt tenetur explicabo temporibus aperiam exercitationem consequatur corrupti labore debitis, quaerat veniam. Eum exercitationem quas nisi accusantium delectus laboriosam laborum!
               Harum perferendis totam cupiditate reiciendis ratione culpa blanditiis quaerat, unde molestiae numquam, obcaecati maxime assumenda possimus. Blanditiis illum doloremque excepturi quasi ut qui sunt aut asperiores ratione minima, numquam dolor?
               </p>
               </Col>
            </Row>
<center>
            <Row>
                <Col lg={4}>
                <Card className='card-bg'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/c6/aa/54/c6aa54eb19ad8e30b13e498820fb0ff7.gif" width={100} height={300} className='ig'/>
                <Card.Body>
                    <Card.Title className='card-title'>Card Title</Card.Title>
                    <Card.Text className='card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button className='card-btn'>Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4}>
                <Card className='card-bg'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/46/b0/e2/46b0e27c295627353b54b73810c5dbf2.gif" width={100} height={300} className='ig'/>
                <Card.Body>
                    <Card.Title className='card-title'>Card Title</Card.Title>
                    <Card.Text className='card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button className='card-btn'>Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4}>
                <Card className='card-bg'>
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/3951514/screenshots/7288432/media/866b49d81c982fdecd5a22de44c5e677.gif" width={100} height={300} className='ig'/>
                <Card.Body>
                    <Card.Title className='card-title'>Card Title</Card.Title>
                    <Card.Text className='card-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button className='card-btn'>Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
</center>
            </Container>

        <center>
        <Footer/>
        </center>

        </div>
    );
}
export default Aboutus;







