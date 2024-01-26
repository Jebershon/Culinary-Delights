import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './/Home.css';
import ad1 from './Asserts/ad1.jpg';
import ad3 from './Asserts/ad3.jpg';
export default function CarouselSale(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
  };
    return(
        <div className='mt-5'>
        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval="1000">
            <img src={ad1} alt='food' width={200} height={300} class="d-block w-100"/>
                <Carousel.Caption>
                <h3>..</h3>
                <p>..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval="1000">
            <img src="https://as1.ftcdn.net/v2/jpg/04/45/16/96/1000_F_445169635_V92LnhJXoMapMXuR4k9bVIu3lHZhDnWc.jpg" alt='food' width={200} height={300} class="d-block w-100"/>
                <Carousel.Caption>
                <h3>..</h3>
                <p>..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval="1000">
            <img  src={ad3} alt='food' width={200} height={300} class="d-block w-100"/>
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