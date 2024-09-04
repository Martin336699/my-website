import '../css/App.css';
import { NavBar } from "./Navbar.jsx";
import { Banner } from "./Banner.jsx";
import { Skills } from './Skills.jsx';
import { Projects } from './ProjectsTest.jsx';
import { Contact } from "./Contact.jsx";
import { Footer } from "./Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />

    </div>
  );
}

export default App;
