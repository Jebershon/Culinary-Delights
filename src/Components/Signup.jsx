import { AccountCircle } from '@mui/icons-material';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './/Home.css';
import { ColorGoo, Mail, User } from "./Asserts/Anim";
function Signup(){
    return(
            <Container style={{color:"black"}} className='justify-content-center'>
            <br/>
            <Row>
            <Col></Col>
            <Col lg={5}>
            <form class="form-l">
            <p class="title">Create Account</p>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><AccountCircle/></InputGroup.Text>
                <Form.Control
                placeholder="Full Name"
                aria-describedby="basic-addon1"
                type="text"/>
               </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><User/></InputGroup.Text>
                <Form.Control
                placeholder="Email"
                aria-describedby="basic-addon1"
                type="email"/>
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Password"
                aria-describedby="basic-addon1"
                type='password'
                />
               </InputGroup>

               <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Mail/></InputGroup.Text>
                <Form.Control
                placeholder="Confirm Password"
                aria-describedby="basic-addon1"
                type='password'
                />
               </InputGroup>
               <Row>
                <Col>
                <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    label="Remember me"
                />
                </Col>
                <Col xs={2}></Col>
                <Col>
                <span class="span-l">
                    <a href='#' style={{textDecoration:"none"}}>Forgot password?</a>
                </span>
                </Col>
                </Row>
                <br/>
                <Button variant="dark" size="lg"  style={{width:"100%"}}>
                Sign Up
                </Button>
                <p class="p">Already have an account?<span class="span">Sign In</span></p>
                <p class="p line">Or With</p>
                <div class="flex-row">

                <button class="btn-l google">
                    <ColorGoo/>
                    Google 
                </button>
                </div>
                </form>
                </Col>
                <Col></Col>
                </Row>
            </Container>
    );
}
export default Signup;

