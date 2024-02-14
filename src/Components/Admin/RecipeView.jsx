import { BarChart, LocalDining, LocalGroceryStore, Shop, StoreMallDirectory, ViewAgenda } from '@mui/icons-material';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Navbar, Row, Table } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Asserts/dinner.png';
import '../Home-2.css'; // Make sure to fix the import path
import '../Home.css';
export default function RecipeView(){
  const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/GetRecipe')
        .then(result => {
          console.log(result.data);
          setRecipes(result.data);
        })
        .catch(err => console.log(err));
    }, []); 

    return(
    <div>
      <Row>
        <Col>
            <div className='mb-5'>
              <Navbar collapseOnSelect expand="lg" className="transparent-Nav" fixed='top'>
              <Navbar>
                  <Container>
                    <Navbar.Brand className='text-white' style={{fontSize:"20px"}}>
                    <Link to='/' className='nav-brand'>
                    <img
                        alt="logo"
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top brand"
                      />&nbsp;
                      <span style={{color:"#ee7752"}}>C</span>ulinary&nbsp;
                      <span style={{color:"#ee7752"}}>D</span>elights
                      </Link>
                    </Navbar.Brand>
                  </Container>
                </Navbar>
                  <br/>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-underline">
                    <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash')}><BarChart style={{color:"white"}}/> Home</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/AddRecipe')}><LocalDining style={{color:"white"}}/> AddRecipe</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/ViewRecipe')}><ViewAgenda style={{color:"white"}}/> ViewRecipe</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/AddGrocery')}><LocalGroceryStore style={{color:"white"}}/> AddGrocery</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/ViewGrocery')}><StoreMallDirectory style={{color:"white"}}/> ViewGrocery</Nav.Link></center>
                      <center><Nav.Link className='navi nav-text' onClick={() => navigate('/AdminDash/Sold')}><Shop style={{color:"white"}}/> Sold</Nav.Link></center>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>
              </div>
        </Col>
    </Row>
    <div className='mt-5 mb-3'>
    <Container>
      <Card className='Admincard-bg mt-3'>
          <Card.Header>
            <Card.Title>Recipe Details</Card.Title>
          </Card.Header>
          <hr/>
          <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe, index) => (
                <tr key={index}>
                  <td>{recipe.name}</td>
                  <td>{recipe.description}</td>
                  <td>
                  <Button variant="warning"  onClick>Update</Button>
                  </td>
                  <td>
                  <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Card.Body>
        </Card>
    </Container>
      </div>
    </div>);
}