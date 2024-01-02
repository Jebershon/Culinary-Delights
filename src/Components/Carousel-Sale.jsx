import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './/Home.css';
import ad1 from './Asserts/ad1.jpg';
import ad2 from './Asserts/ad2.jpg';
import ad3 from './Asserts/ad3.jpg';
export default function CarouselSale(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
  };
    return(
        <div>
            <br/>
            <br/>
        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval="1000">
            <img src={ad1} alt='food' width={300} height={400} class="d-block w-100"/>
                <Carousel.Caption>
                <h3>..</h3>
                <p>..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval="1000">
            <img src={ad2} alt='food' width={300} height={400} class="d-block w-100"/>
                <Carousel.Caption>
                <h3>..</h3>
                <p>..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval="1000">
            <img  src={ad3} alt='food' width={300} height={400} class="d-block w-100"/>
                <Carousel.Caption>
                <h3>..</h3>
                <p>..</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Row>
        </div>
    );
}