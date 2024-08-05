import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/arrow.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/xing.svg';
import navIcon3 from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/martin-s-2923a7287" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://www.xing.com/profile/Martin_Schmidt018512" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="https://github.com/Martin336699" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}