import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaShippingFast,
         FaClock,
         FaBell
        } from 'react-icons/fa';
import "./Gridicon.css";

export default function Gridicon() {
  return (
   <div style={{ backgroundColor: "white" }}>
     <Container >
      <Row className="row1" xs={1} md={2} lg={3}  >
        <Col className="columns"  >
          <FaShippingFast size={67} />
          <h4>FREE SHIPPING</h4>
          <p>Free Shipping World Wide</p>
        </Col>
        <Col  className="columns" >
          <FaClock size={67} />
          <h4>24 X 7 SERVICE</h4>
          <p>Online Service For 24 X 7</p>
        </Col>
        <Col className="columns1">
          <FaBell size={67} />
          <h4>FESTIVAL OFFER</h4>
          <p>New Online Special Festival Offer</p>
        </Col>
      </Row>
    </Container>
   </div>
  );
}
