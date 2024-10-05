import { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import calc from "../assets/img/calc.jpg";
import todo from "../assets/img/todo.jpg";
import game from "../assets/img/game.jpg";
import household from "../assets/img/household.jpg";
import wetter from "../assets/img/wetter.jpg";
import Calculator from './Calculator'; 
import ToDo from './ToDo';
import RockPaperScissors from './RockPaperScissors';
import Haushaltsbuch from './Haushaltsbuch';
import Weather from './Weather';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectComponent, setSelectedProjectComponent] = useState(null);

  const handleShowModal = (component) => {
    setSelectedProjectComponent(component);
    setShowModal(true);
  };

 const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProjectComponent(null);
};

const apps = [
{
title: "Calculator",
description: "Design & Development",
imgUrl: calc,
component: <Calculator />
},
{
title: "To-Do-List",
description: "Design & Development",
imgUrl: todo,
component: <ToDo />
},
{
title: "Haushaltsbuch",
description: "Design & Development",
imgUrl: household,
component: <Haushaltsbuch />
}
];

const games = [
{
title: "Rock-Paper-Scissors-Game",
description: "Design & Development",
imgUrl: game,
component: <RockPaperScissors />
}
];

const websites = [
{
title: "Wetter-App",
description: "Design & Development",
imgUrl: wetter,
component: <Weather />
}
];

return (
<section className="project" id="projects">
<Container>
<Row>
  <Col>
  <h2>Projects</h2>
  <p>In this section, I present a selection of my projects that demonstrate my programming skills across various areas. From web development to software applications and other programming projects—each project reflects my passion for coding and my ability to solve complex problems.</p>
  <Tab.Container id="projects-tabs" defaultActiveKey="first">
    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
      <Nav.Item><Nav.Link eventKey="first">Apps</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="second">Games</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="third">Websites</Nav.Link></Nav.Item>
    </Nav>

<Tab.Content>

<Tab.Pane eventKey="first">
<Row>
  {apps.map((app,index)=>(<Col sm={6} md={4} key={index}><div className="proj-imgbx" onClick={()=>app.component?handleShowModal(app.component):window.open(app.link)}><img src={app.imgUrl} alt={app.title}/><div className="proj-txtx"><h4>{app.title}</h4><span>{app.description}</span></div></div></Col>))}
</Row></Tab.Pane>

{/* Games Tab */}
<Tab.Pane eventKey="second">
<Row>  
  {games.map((game,index)=>(<Col sm={6} md={4} key={index}><div className="proj-imgbx" onClick={()=>game.component?handleShowModal(game.component):window.open(game.link)}><img src={game.imgUrl} alt={game.title}/><div className="proj-txtx"><h4>{game.title}</h4><span>{game.description}</span></div></div></Col>))}
</Row></Tab.Pane>

{/* Websites Tab */}
<Tab.Pane eventKey="third">
<Row>
  {websites.map((site,index)=>(<Col sm={6} md={4} key={index}><div className="proj-imgbx" onClick={()=>site.component?handleShowModal(site.component):window.open(site.link)}><img src={site.imgUrl} alt={site.title}/><div className="proj-txtx"><h4>{site.title}</h4><span>{site.description}</span></div></div></Col>))}
</Row></Tab.Pane>

</Tab.Content> 
            </Tab.Container> 
          </Col> 
        </Row> 
        {/* Modal für Projekte */}
        {/* Modal-Komponente zur Anzeige von Projektinformationen */}
<Modal show={showModal} onHide={handleCloseModal} className='custom-modal'><Modal.Header closeButton><Modal.Title>Project Details</Modal.Title></Modal.Header><Modal.Body>{selectedProjectComponent}</Modal.Body><Modal.Footer><Button variant='secondary' onClick={handleCloseModal}>Close</Button></Modal.Footer></Modal>

{/* Container-Ende */}
</Container> 
{/* Abschnittsende */}
</section> 
);};