import { BarChart, LocalDining, LocalGroceryStore, Shop, StoreMallDirectory, ViewAgenda } from '@mui/icons-material';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Navbar, Row, Table } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Asserts/dinner.png';
import '../Home-2.css'; // Make sure to fix the import path
import '../Home.css';
import Restriction from '../Restriction.jsx';
export default function RecipeView(){
  function handleDelete(id){
    axios.delete('https://culinary-delights-backend.onrender.com/deleteGrocery/'+id)
        .then(result => {console.log(result); window.location.reload();})
        .catch(err => console.log(err));
  }
  const navigate = useNavigate();
    const [Grocery, setGrocery] = useState([]);
    useEffect(() => {
      axios.get('https://culinary-delights-backend.onrender.com/GetGrocery')
        .then(result => {
          console.log(result.data);
          setGrocery(result.data);
        })
        .catch(err => console.log(err));
    }, []);
    const [display,setDisplay]=useState(window.localStorage.getItem("role"));
    return(
      <>
    {display?(
    <>
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
     <Card.Title>Grocery Details</Card.Title>
     </Card.Header>
     <hr/>
     <Card.Body>
     <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Grocery.map((items, index) => (
                <tr key={index}>
                  <td><img src={items.image_url} width={80} height={80}/></td>
                  <td>{items.name}</td>
                  <td>{items.price}</td>
                  <td>
                    <Link to={`/AdminDash/UpdateGrocery/${items._id}`} className='btn btn-warning'>Update</Link>
                  </td>
                  <td>
                    <Button variant="danger" onClick={()=>{handleDelete(items._id)}}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
     </Card.Body>
    </Card>
    </Container>
    </div>
    </div>
    </>
  ):(
    <div>
    <Restriction/>
    </div>
   )}
  </>
    );
}