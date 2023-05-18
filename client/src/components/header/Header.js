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
   <div style={{marginTop:'1in'}} >
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{height:'500px',zIndex:0}}>
        <img
          className="d-block w-100"
          src={h1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 >First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      
      <Carousel.Item style={{height:'500px'}}>
        <img
          className="d-block w-100 h-40"
          src={h2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
     
      <Carousel.Item style={{height:'500px'}} >
        <img
          className="d-block w-100 "
          src={h3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Third slide label</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

