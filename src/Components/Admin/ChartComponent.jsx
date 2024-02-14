import { BarChart, LocalDining, LocalGroceryStore, Shop, StoreMallDirectory, ViewAgenda } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardHeader, Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Asserts/dinner.png';
import recipe_book from '../Hardcode-data/Food-Recipes-details';
import '../Home-2.css'; // Make sure to fix the import path
import '../Home.css';
const ChartComponent = () => {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const barChartRef = useRef(null);    

    const recipeNames = recipe_book.map((recipe) =>(recipe.name));
    console.trace(recipeNames); 

    const label1= [...recipeNames];

    const rating = recipe_book.map((recipe) =>{
      let sum=0;
      for(var i=0;i<recipe.rating.length;i++)
      {
      sum=recipe.rating[i]+sum;
      }
      return Math.round(sum/recipe.rating.length);
    });

    const dataset1=[
      {
        name: 'Recipe rated',
        data: rating,
      },
    ];

    const label2= ["vegetable", "fruit", "dairy", "meat", "grains", "beverages"];
    const dataset2=[
      {
        name: 'Items',
        data: [30, 50, 20,12,23,4],
      },
    ];

  useEffect(() => {
    // Update the Bar chart
    if (chartRef && chartRef.current && dataset1.length > 0) {
      chartRef.current.chart.updateOptions({
        xaxis: {
          categories: label1,
        },
      });
      chartRef.current.chart.updateSeries([{ data: dataset1[0].data }]);
    }
  }, [label1, dataset1]);


  useEffect(() => {
    // Update the Bar chart
    if (barChartRef && barChartRef.current && dataset2.length > 0) {
      barChartRef.current.chart.updateOptions({
        xaxis: {
          categories: label2,
        },
      });
      barChartRef.current.chart.updateSeries([{ data: dataset2[0].data }]);
    }
  }, [label2, dataset2]);


  const BasicbarChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      background: '#F6F8FA',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    colors: ['#fc8019'],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: label2,
    },
  };


  const barChartOptions = {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#fc8019'],
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: label1,
    },
  };

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
    <Row>
    <Card className='mt-3 mb-3 chart'>
        <CardHeader style={{color:"grey",fontSize:"20px"}}>Rating of Each Recipe</CardHeader>
        <hr style={{color:"white"}}/>
        <div className='chart-bg'>
        <Chart options={barChartOptions} series={dataset1.map((dataset) => dataset)} type="area" height={400} ref={chartRef} />
        </div>
    </Card>
    </Row>
    <Row>
    <Card className='mt-3 mb-3 chart'>
        <CardHeader style={{color:"grey",fontSize:"20px"}}>Category Analysis : Total products in Each Category</CardHeader>
        <hr style={{color:"white"}}/>
        <div className='chart-bg'>
          <Chart options={BasicbarChartOptions} series={dataset2.map((dataset) => dataset)} type="bar" height={400} ref={barChartRef } /> 
        </div>
    </Card>
    </Row>
    </Container>
    </div>
  </div>);
};

export default ChartComponent;
