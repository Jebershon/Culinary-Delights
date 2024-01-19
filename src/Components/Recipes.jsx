import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './/Home.css';
import { Cart } from './Asserts/Anim';
import logo from './Asserts/dinner.png';
import CartDetails from './Cart-Details';
import recipe_book from './Food-Recipes-details';
import Footer from './Footer';
import RecipeCard from './RecipeCard';
function Recipes() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [recipes, setRecipes] = useState(recipe_book);

  const [filter, setFilter] = useState('all'); // 'all', 'vegetarian', 'nonvegetarian'
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (selectedKey) => {
    setFilter(selectedKey);
    filterRecipes(selectedKey);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterRecipes(filter, event.target.value);
  };

  const filterRecipes = (filterOption, search) => {
    let filteredRecipes = recipe_book;

    if (filterOption !== 'all') {
      filteredRecipes = filteredRecipes.filter(recipe => {
        return recipe.isVegetarian === (filterOption === 'vegetarian');
      });
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredRecipes = filteredRecipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchLower);
      });
    }

    setRecipes(filteredRecipes);
  };
  console.log('Filter:', filter);
  console.log('Search:', searchTerm);
  console.log('Filtered Products:',recipes);
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
        <br/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-underline">
          <center><Nav.Link className='navi'><Link to='/' className='nav-text'>Home</Link></Nav.Link></center>
          <br/>
          <center><Nav.Link className='navi'><Link to='/Recipes' className='nav-text'>Recipes</Link></Nav.Link></center>
          <br/>
          <center><Nav.Link className="navi nav-text"  onClick={handleShow}><Cart/></Nav.Link></center>
          <br/>
          </Nav>
          <center>
          <NavDropdown title="Filter" className='navi nav-text'  id="basic-nav-dropdown" onSelect={handleFilterChange}>
              <NavDropdown.Item eventKey="all" className='drop-bton'>All</NavDropdown.Item>
              <NavDropdown.Item eventKey="vegetarian" className='drop-bton'>Veg</NavDropdown.Item>
              <NavDropdown.Item eventKey="nonvegetarian" className='drop-bton'>Non-Veg</NavDropdown.Item>
           </NavDropdown>
          </center>
          <br/>
        </Navbar.Collapse>
        <center>
          <Form className="d-flex navi1 justify-content-center" inline>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{width:"330px",borderRadius:"20px"}}
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form>
          </center>
    </Navbar>


    <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title><h2>Cart <Cart/></h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartDetails/>
        </Offcanvas.Body>
      </Offcanvas>

    <br/>
    <br/>
    <div>
    <Container fluid className='mt-5'>
    <br/>
    <br/>
    <Row>  
    {recipes.map(recipe => (
          <Col lg={4}>
          <RecipeCard key={recipe.id} recipe={recipe} />
          </Col>
        ))}
    </Row>
    </Container>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default Recipes;