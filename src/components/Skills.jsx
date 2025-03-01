import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import bootstrap from "../assets/img/bootstrap.svg";
import css from "../assets/img/css.svg";
import html from "../assets/img/html1.svg";
import js from "../assets/img/js.svg";
import react from "../assets/img/react.svg";
import ts from "../assets/img/ts.svg";


export const Skills = ({theme}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className={`skill-bx ${theme}`}>
            <h2>
              Skills
            </h2>
            <p>Here you will find an overview of my key skills as a web developer. With these skills, I   create responsive websites that function optimally on various devices.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src={html} alt="Image" />
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img src={css} alt="Image" />
                <h5>CSS</h5>
              </div>
              <div className="item">
                <img src={js} alt="Image" />
                <h5>JavaScript</h5>
              </div>
              <div className="item">
                <img src={ts} alt="Image" />
                <h5>TypeScript</h5>
              </div>
              <div className="item">
                <img src={react} alt="Image" />
                <h5>React</h5>
              </div>
              <div className="item">
                <img src={bootstrap} alt="Image" />
                <h5>Bootstrap</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}