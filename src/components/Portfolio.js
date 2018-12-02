import React, { Component } from "react";
import "./Portfolio.css";
import { Container, Card, Icon, Image, Label } from "semantic-ui-react";
import { projects } from "../data/projectInfo";

class Portfolio extends Component {
  getLabelInfo = tech => {
    if (tech === "React") return { color: "teal", icon: "react" };
    if (tech === "HTML5") return { color: "yellow", icon: "html5" };
    if (tech === "Node") return { color: "orange", icon: "node js" };
    if (tech === "MongoDB") return { color: "blue", icon: "database" };
    if (tech === "CSS3") return { color: "red", icon: "css3" };
  };

  render() {
    const headers = ["Main Projects", "Mini Projects"];

    return (
      <div className="overlay">
        <div className="container">
          <Container>
            <h2>Portfolio</h2>
            {projects.map((projects, index) => (
              <div key={index}>
                <h3> {headers[index]}</h3>
                <div className="display">
                  {projects.map((project, index) => (
                    <div className="project" key={index}>
                      <Card id="card">
                        <Image src={require(`../assets/${project.img}`)} />
                        <Card.Content>
                          <Card.Header>{project.title}</Card.Header>
                          <Card.Meta>
                            {project.tech.map((tech, index) => {
                              const label = this.getLabelInfo(tech);
                              return (
                                <Label
                                  key={index}
                                  id="label"
                                  color={label.color}
                                  basic
                                >
                                  {tech + " "}
                                  <Icon name={label.icon} />
                                </Label>
                              );
                            })}
                          </Card.Meta>
                          <Card.Description>
                            {project.description}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content id="card-content" extra>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="links"
                            >
                              <Icon name="code" />
                              View Source
                            </a>
                          )}
                          {project.appUrl && (
                            <a
                              href={project.appUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="links"
                            >
                              <Icon name="computer" />
                              See it live
                            </a>
                          )}
                        </Card.Content>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </div>
      </div>
    );
  }
}

export default Portfolio;
