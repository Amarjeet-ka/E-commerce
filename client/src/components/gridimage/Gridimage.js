import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import g1 from "../assets/pc.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import './Gridimage.css';

function Gridimage() {
  return (
    <Container fluid style={{ backgroundColor: "white" }}>
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Image className='image'  src={g1} thumbnail />
        </Col>
        <Col>
          <Image className='image'  src={g2} thumbnail />
        </Col>
        <Col>
          <Image className='image'  src={g3} thumbnail />
        </Col>
        <Col>
          <Image className='image'  src={g4} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Gridimage;
