import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './/Home.css';
import ad1 from './Asserts/slider_1.png';
import ad2 from './Asserts/slider_2.png';
import ad3 from './Asserts/slider_3.png';
export default function CarouselSale(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
  };
    return(
        <div className='mt-5'>
        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect} style={{borderRadius:"10px"}}>
            <Carousel.Item interval="2000">
            <img src={ad1} alt='food' width={200} height={400} class="d-block w-100"/>
                <Carousel.Caption>
                <h3>The Woks of Life</h3>
                <p>Once you understand the foundations of cooking</p>
                <Link  className="primary-btn" to='./Recipes'>recipe</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval="2000">
            <img src={ad2} alt='food' width={200} height={400} class="d-block w-100"/>
                <Carousel.Caption>
                <h3>Simply Delicious</h3>
                <p>Taste as you go. When you taste the food throughout the cooking process, you can make adjustments as you go.</p>
                <Link  className="primary-btn" to='./Recipes'>recipe</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval="2000">
            <img  src={ad3} alt='food' width={200} height={400} class="d-block w-100"/>
                <Carousel.Caption>
                <h3>Easy and Delicious Recipes for Beginners</h3>
                <p>No one is born a great cook, one learns by doing.</p>
                <Link  className="primary-btn" to='./Recipes'>recipe</Link>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Row>
        </div>
    );
}