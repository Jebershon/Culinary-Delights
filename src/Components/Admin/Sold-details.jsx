import { BarChart, LocalDining, LocalGroceryStore, Shop, StoreMallDirectory, ViewAgenda } from '@mui/icons-material';
import { Card, Col, Container, Navbar, Row, Table } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import '..//Home-2.css';
import '..//Home.css';
import logo from '../Asserts/dinner.png';
import soldGroceriesData from '../Hardcode-data/purchaseDetails.js';
function SoldDetails(){
    const navigate = useNavigate();
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
            {soldGroceriesData.map((x)=>(
                <Row>
                <Col lg={12}>
                <Card className='mt-3 mb-3 Nutri-card'>
                    <Card.Header style={{color:"#fc8019",fontSize:"25px"}}><span className='gip'>{x.username}</span></Card.Header>
                    <Card.Text className='mt-3' style={{color:"#c8c8d0",fontSize:"15px"}}><span className='gip' style={{color:"white"}}>Address:</span>{x.address}   ||   <span className='gip' style={{color:"white"}}>Email:</span>{x.userEmail}</Card.Text>
                    <hr/>
                </Card>
                </Col>
                </Row>
            ))}
            <Row>
                <Col lg={12}>
                <Table responsive="lg" striped bordered hover className='mt-3 mb-3 table-bg'>
                <thead>
                    <tr>
                    <th style={{color:"#fc8019"}}>Username</th>
                    <th style={{color:"#fc8019"}}>User Email</th>
                    <th style={{color:"#fc8019"}}>Address</th>
                    <th style={{color:"#fc8019"}}>Recipe Name</th>
                    <th style={{color:"#fc8019"}}>Recipe Exists</th>
                    <th style={{color:"#fc8019"}}>Grocery Items</th>
                    <th style={{color:"#fc8019"}}>Total Price</th>
                    <th style={{color:"#fc8019"}}>Purchase Date</th>
                    <th style={{color:"#fc8019"}}>Status</th>
                    <th style={{color:"#fc8019"}}>Grocery ID</th>
                    <th style={{color:"#fc8019"}}>Recipe ID</th>
                    </tr>
                </thead>
                <tbody>
                    {soldGroceriesData.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.username}</td>
                        <td>{entry.userEmail}</td>
                        <td>{entry.address}</td>
                        <td>{entry.recipeName}</td>
                        <td>{entry.recipeExists ? 'Yes' : 'No'}</td>
                        <td>
                        <ul>
                            {entry.groceryItems.map((item, i) => (
                            <li key={i}>{`${item.name}: ${item.quantity}`}</li>
                            ))}
                        </ul>
                        </td>
                        <td>{entry.totalPrice}</td>
                        <td>{entry.purchaseDate}</td>
                        <td>{entry.status}</td>
                        <td>{entry.groceryId}</td>
                        <td>{entry.recipeId}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
                </Col>
                </Row>
            </Container>
        </div>
    </div>
    );
}
export default SoldDetails;