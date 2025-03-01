import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import calc from "../assets/img/calc.jpg";
import todo from "../assets/img/todo.jpg";
import game from "../assets/img/game.jpg";
import household from "../assets/img/household.jpg";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";


export const Projects = (props) => {

  const apps = [
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: calc,
      link: "https://github.com/Martin336699/js-tutorial"
    },
    {
      title: "To-Do-List",
      description: "Design & Development",
      imgUrl: todo,
      link: "https://github.com/Martin336699/udemi-js-course"
    },
    {
      title: "Haushaltsbuch",
      description: "Design & Development",
      imgUrl: household,
      link: "https://github.com/Martin336699/udemi-js-course"
    }
  ];
  const games = [
    {
      title: "Rock-Paper-Scissors-Game",
      description: "Design & Development",
      imgUrl: game
    }
  ];
  const websites = [
    {
      title: "Free Project",
      description: "Design & Development",
      imgUrl: projImg1
    },
    {
      title: "Free Project",
      description: "Design & Development",
      imgUrl: projImg2
    }
  ];

  return (
    <section className={`project ${props.light}`} id="projects">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
          <p>In this section, I present a selection of my projects that demonstrate my programming    skills across various areas. From web development to software applications and other  programming projects—each project reflects my passion for coding and my ability to solve complex problems.</p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Apps</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Games</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Websites</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    apps.map((app, index) => {
                      return (
                        <ProjectCard key={index} {...app} />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  {
                    games.map((game, index) => {
                      return (
                        <ProjectCard key={index} {...game} />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <Row>
                  {
                    websites.map((site, index) => {
                      return (
                        <ProjectCard key={index} {...site} />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}