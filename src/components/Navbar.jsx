import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../assets/img/fire.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/xing.svg';
import navIcon3 from '../assets/img/github.svg';


export const handleButtonClick = () => {
  document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
};


export function NavBar({ theme, onThemeChange }) {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };


  return (
   <Navbar expand="lg" className={`${scrolled ? 'scrolled' : ''} ${theme}`}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
          </Nav.Link>
          <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
          >
              Skills
          </Nav.Link>
          <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
          >
              Projects
          </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div>
              <label htmlFor="light">
                <input
                  type="radio"
                  name="option"
                  value="light"
                  onClick={onThemeChange}
                  checked={theme === 'light'}
                />
                Light
              </label>
              <label htmlFor="dark">
                <input
                  type="radio"
                  name="option"
                  value="dark"
                  onClick={onThemeChange}
                  checked={theme === 'dark'}
                />
                Dark
              </label>
            </div>

            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/martin-s-2923a7287"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.xing.com/profile/Martin_Schmidt018512"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://github.com/Martin336699"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={handleButtonClick}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}