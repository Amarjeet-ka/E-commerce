import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";

export default function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: '500px' }}>
          <img
            className="d-block w-100"
            src={h1}
            alt="First slide"
            style={{ objectFit: 'cover', height: '600px' }}
          />
          <Carousel.Caption style={{color:'green'}}>
          <h2>Wide Range of Elentrinics Items</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '500px' }}>
          <img
            className="d-block w-100 h-40"
            src={h2}
            alt="Second slide"
            style={{ objectFit: 'cover', height: '600px' }}
          />

          <Carousel.Caption style={{color:'orange'}}>
          <h2>Wide Range of Elentrinics Items</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '500px' }}>
          <img
            className="d-block w-100"
            src={h3}
            alt="Third slide"
            style={{ objectFit: 'cover', height: '600px' }}
          />

          <Carousel.Caption>
          <h2>Wide Range of Elentrinics Items</h2>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
