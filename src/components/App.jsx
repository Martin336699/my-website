import '../css/App.css';
import { NavBar } from "./Navbar.jsx";
import { Banner } from "./Banner.jsx";
import { Skills } from './Skills.jsx';
import { Projects } from './ProjectsTest.jsx';
import { Contact } from "./Contact.jsx";
import { Footer } from "./Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light'); // New state variable for theme

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className={`App ${theme}`}>
      <NavBar theme={theme} onThemeChange={handleThemeChange} />
      <Banner theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;