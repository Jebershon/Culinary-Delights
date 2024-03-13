import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Cart } from '../Asserts/Anim';
import logo from '../Asserts/dinner.png';
import CartDetails from '../Cart-Details';
import Footer from '../Footer';
import '../Home.css';
import RecipeCard from './RecipeCard';

function Recipes() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]); // State to hold filtered recipes
  const [filter, setFilter] = useState('all'); // 'all', 'vegetarian', 'nonvegetarian'
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/GetRecipe')
      .then(result => {
        console.log(result.data);
        setRecipes(result.data);
        setFilteredRecipes(result.data); // Initialize filtered recipes with all recipes
      })
      .catch(err => console.log(err));
  }, []); 

  useEffect(() => {
    filterRecipes(filter, searchTerm);
  }, [filter, searchTerm]);

  const handleFilterChange = (selectedKey) => {
    setFilter(selectedKey);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterRecipes = (filterOption, search) => {
    let filteredRecipes = recipes;

    if (filterOption !== 'all') {
      filteredRecipes = recipes.filter(recipe => {                       
        return recipe.isVegetarian === (filterOption === 'vegetarian');
      });
    }

    if (search) {                       
      const searchLower = search.toLowerCase();
      filteredRecipes = filteredRecipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchLower);
      });
    }
    setFilteredRecipes(filteredRecipes); // Update filtered recipes state                              
  };

  // console.log('Filter:', filter);
  // console.log('Search:', searchTerm);
  // console.log('Filtered Products:',recipes);

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const API_KEY = 'AIzaSyBbtG1J92FRSop_0_dO66XJTw7QUQQ8pSo';
    const maxResults = 9; // Set the desired number of results

    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            q: "Madras Samayal",
            type: 'video',
            part: 'snippet',
            maxResults: maxResults,
          },
        });

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchData();
  }, []);


  const addToCart = (data) => {
    if (!data || !data.ingredients || !Array.isArray(data.ingredients)) {
        console.error("Invalid grocery item data format");
        return;
    }
    const token = jwtDecode(window.localStorage.getItem("token"));
    const userId = token.id;

    const groceryItems = data.ingredients;
    
    groceryItems.forEach(item => {
        axios.get(`http://localhost:3001/getGroceryItemsByName`, {
            params: { name: item.name }
        })
        .then(response => {
          const foundGroceryItems = response.data;
          console.log("got data : ", foundGroceryItems[0].name);
          if (foundGroceryItems && foundGroceryItems.length > 0) {
              const itemToAdd = foundGroceryItems[0];
              const { 
                name: ingredientName,
                _id: ingredientId,
                price: ingredientPrice,
                image_url: ingredientURL
            } = itemToAdd;
            const ingredientQuantity = item.quantity;
            const count = 1;
            const groceryItem = {
                ingredientName,
                ingredientId,
                ingredientPrice,
                ingredientQuantity,
                ingredientURL,
                ingredientCount:count
            };
            console.log("Found item:", JSON.stringify(groceryItem, null, 2));
              axios.post(`http://localhost:3001/addToCart/${userId}`, { groceryItem })
              .then(response => {
                  const updatedCart = response.data;
                  if (updatedCart && updatedCart.name) {
                      console.log("Updated cart:", updatedCart.name);
                  } else {
                      console.log("Updated cart:", updatedCart);
                  }
              })
              .catch(error => {
                  console.error("Error adding item to cart:", error);
              });
          } else {
              console.log("No grocery items found with the provided name:", item.name);
          }
      }).catch(error => {
            console.error("Error fetching grocery items by name:", error);
        });
    });
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
          <center><Nav.Link className='navi'><Link to='/Recipes' className='nav-text'>Recipes</Link></Nav.Link></center>
          <center><Nav.Link className="navi nav-text"  onClick={handleShow}><Cart/></Nav.Link></center>
          </Nav>
          <br/>
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
        <hr style={{color:"black"}}/>
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
    {filteredRecipes.map(recipe => (
          <Col lg={4}>
          <RecipeCard key={recipe.id} recipe={recipe} onAddToCart={addToCart}/>
          </Col>
        ))}
    </Row>
    </Container>
     <Container className="mt-5 mb-3">
      <h1>Recommended Videos</h1>
      <hr/>
      <Row xs={1} md={2} lg={3}>
        {videos.map((video) => (
          <Col key={video.id.videoId}>
            <iframe
              className="video-frame"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allowFullScreen
              title={video.snippet.title}
            ></iframe>
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