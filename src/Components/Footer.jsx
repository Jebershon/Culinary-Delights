import { Construction, FitnessCenter } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Col, Container, Row } from 'react-bootstrap';
import './/Home.css';
import Contactus from './Contactus';
function Footer(){
    return(
        <div>
            <footer class="text-center bg-black" style={{color:"#ee7752"}}>
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                    </div>                
                    <div>
                    <a href="#!" class="me-4 text-reset">
                    <FacebookIcon/>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                    <TwitterIcon/>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                    <GoogleIcon/>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                    <LinkedInIcon/>
                    </a>
                    <a href="#!" class="me-4 text-reset">
                    <GitHubIcon/>
                    </a>
                    </div>
                    </section>
                    <Container>
                    <Row>
                    <Col lg={3}>
                        <br/>
                            <h6 class="text-uppercase fw-bold">Culinary Delights</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolorem iure et praesentium omnis, magnam aliquam blanditiis, consequatur, 
                                nobis ipsa dolores eos ex minima sint tenetur ipsam optio excepturi quisquam. Soluta.
                            </p>
                    </Col>
                    <Col>
                    <br/>
                        <div>
                        <h6 class="text-uppercase fw-bold">Products</h6>
                        <p>
                            <a href="#!" class="text-reset">Grocery</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Recipes</a>
                        </p>
                        <p>
                            <a href="https://ded-lift.netlify.app" class="text-reset"><FitnessCenter/></a>
                        </p>
                        <p>
                            <a href="https://powertoolsrental.netlify.app/" class="text-reset"><Construction/></a>
                        </p>
                        </div>
                    </Col>
                    <Col>
                        <br/>
                            <div>
                            <h6 class="text-uppercase fw-bold">Useful links</h6>
                            <p>
                                <a href="#!" class="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Orders</a>
                            </p>
                            </div>
                    </Col>
                    <Col>
                        <br/>
                            <div>
                            <h6 class="text-uppercase fw-bold">Any Doubts Contact us here.</h6>
                            <div>
                            <Contactus/>
                            </div>
                            </div>
                    </Col>
                </Row>
                </Container>
                <br/>
                <div class="text-center" style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
                    © 2021 Copyright: &nbsp;
                <a class="text-reset fw-bold" href="https://github.com/Jebershon/jebershon.github.io">Culinary-Delights</a>
                </div>
            </footer>
        </div>
    );
}
export default Footer;