import GoogleIcon from '@mui/icons-material/Google';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { Mail, User } from "./Asserts/Anim";
// #ff5858
function Login(){
    return(
        <Container style={{color:"black"}}>
            <br/>
            <Row>
            <Col></Col>
            <Col lg={5}>
            <Container style={{color:"black"}}>
            <form class="form-l">
            <p class="title">Welcome back</p>
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
                <Button variant="dark" size="lg" style={{width:"100%"}}>
                Sign In
                </Button>
                <p class="p">Don't have an account?<span class="span">Sign Up</span></p>
                <p class="p line">Or With</p>
                <div class="flex-row">

                <button class="btn-l google">
                    <GoogleIcon/>
                    Google 
                </button>
                </div>
                </form>
            </Container>
            </Col>
            <Col></Col>
            </Row>
        </Container>
    );
}
export default Login;