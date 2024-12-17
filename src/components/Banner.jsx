import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { handleButtonClick } from "./Navbar.jsx";
import headerImg from "../assets/img/ich3.1.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my Portfolio</span> */}
            <h1>{`Hi I'm webdecoded `}{<br />}{'=>'}<span className="wrap">{text}</span></h1>
            <p>Hello! My name is Martin Schmidt, and I am a 38-year-old self-taught web developer. I have a strong passion for technology and problem-solving, and I enjoy bringing ideas to life through code.
            On this website, you can explore my projects and learn more about my skills in HTML, CSS, JavaScript, and React. I look forward to growing in this field and embracing new opportunities and challenges ahead. Thank you for visiting!</p>
            <button onClick={handleButtonClick}>Let's connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" id="foto" className="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}