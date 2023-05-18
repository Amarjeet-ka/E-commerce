import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import "./Topcollection.css";
function Topcollection() {
  return (
    <Container fluid style={{ backgroundColor: "white", paddingTop: "0%", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%" }}>

      <h4 className="text0">Special Offer</h4>
      <h1 className="text1">Top Collection</h1>
      <h3 className="text2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been <br/> the industry's standard dummy text ever
        since the 1500s,
      </h3>
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Image className="images" src={g1} thumbnail />
            <h4>Caonon</h4>
            <h2>Price 5k</h2>
        </Col>
        <Col>
          <Image className="images" src={g2} thumbnail />
          <h4>Sony</h4>
          <h2>Price 5k</h2>
        </Col>
        <Col>
          <Image className="images" src={g3} thumbnail />
          <h4>Samsung</h4>
          <h2>Price 5k</h2>
        </Col>
        <Col>
          <Image className="images" src={g4} thumbnail />
         <h4>Lenevo</h4>
          <h2>Price 5k</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Topcollection;
