import { ShoppingCartCheckout } from '@mui/icons-material';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Cart } from '../Asserts/Anim';
import logo from '../Asserts/dinner.png';
import CartDetails from '../Cart-Details';
import '../Home.css';
import GloceryCard from "./GloceryCard";
function Glocery() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [filter, setFilter] = useState('all'); // 'all', 'meat', 'vegetable', 'grain', 'dairy'
  const [search, setSearch] = useState('');

 const [item,setItem] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/GetGrocery')
      .then(result => {
        console.log(result.data);
        setItem(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = item.filter( (item)=> {

    const categoryMatch = filter === 'all' || item.category === filter;

    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });
  console.log('Filter:', filter);
  console.log('Search:', search);
  console.log('Filtered Products:', filteredProducts);
 
  const addToCart = (userId, groceryItem) => {
    const { ingredientName,
            ingredientId,
            ingredientPrice,
            ingredientQuantity,
            ingredientURL,
            ingredientCount } = groceryItem;

    axios.post(`http://localhost:3001/addToCart/${userId}`, { groceryItem })
        .then(response => {
            const updatedCart = response.data;
            console.log(updatedCart);
        })
        .catch(error => {
            console.error("Error adding item to cart:", error);
        });
};

const data = (groceryItem) => {
  const token = jwtDecode(window.localStorage.getItem("token"));
  const userId = token.id; 
  addToCart(userId, groceryItem);
};

  return (
    <div className='bg-c'>
    <Navbar collapseOnSelect expand="lg" className="transparent-Nav" fixed="top">
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
          <center><Nav.Link className='navi'><Link to='/' className='nav-text'>Home</Link></Nav.Link></center>
          <center><Nav.Link className='navi'><Link to='/Glocery' className='nav-text'>Grocery</Link></Nav.Link></center>
          <center><Nav.Link className="navi" style={{color:"white"}}  onClick={handleShow}><Cart/></Nav.Link></center>
          </Nav>
          <br/>
          <center>
          <NavDropdown className='navi nav-text' title="Filter" onSelect={handleFilterChange} id="basic-nav-dropdown">
            <NavDropdown.Item className='drop-bton' eventKey="all">All</NavDropdown.Item>
            <NavDropdown.Item className='drop-bton' eventKey="meat">Meat</NavDropdown.Item>
            <NavDropdown.Item className='drop-bton' eventKey="vegetable">Vegetable</NavDropdown.Item>
            <NavDropdown.Item className='drop-bton' eventKey="grains">Grain</NavDropdown.Item>
            <NavDropdown.Item className='drop-bton' eventKey="dairy">Dairy</NavDropdown.Item>
          </NavDropdown>
          </center>
          <br/>
        </Navbar.Collapse>
        <center>
          <Form className="d-flex navi1 justify-content-center fixed">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{width:"330px",borderRadius:"20px"}}
              value={search}
              onChange={handleSearchChange}
            />
          </Form>
          </center>
    </Navbar>


    <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h2>Cart <Cart/></h2>
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <hr style={{color:"black"}}/>
          <CartDetails/>
        </Offcanvas.Body>
      </Offcanvas>

    <br/>
    <br/>      
    <Container fluid className='mt-5'>
    <br/>
    <br/>
      <Row>
        {filteredProducts?.map(item => (
        <Col lg={4}>
        <GloceryCard key={item.product_id} ingre={item} onAddToCart={data}/>
        </Col>
      ))} 
      </Row>
    </Container>
    </div>
  );
}

export default Glocery;