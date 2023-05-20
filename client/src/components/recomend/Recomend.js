import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './Recomend.css';
import rd from '../assets/rd.jpg'
export default function Recomend() {
  return (
   <div style={{backgroundColor:'white'}}>
     <Container  >
      <Row>
        <Col md={4} className="column1">
          <div className="del">
          <h4> UNDER $20 | FREE DELIVERY </h4>
          </div>
   
   
   
        </Col>
        <Col md={8} className="column2">
      <div className="del1">
      <h4>RECOMMENDATIONS FOR YOU New Products  Featured Products</h4>
      </div>
         <div>
            <Image src={rd} className="image"  alt="figure not found" thumbnail/>
         </div>
        </Col>
      </Row>
    </Container>
   </div>
  );
}
