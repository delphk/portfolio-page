import React from "react";
import { Container, Icon } from "semantic-ui-react";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-grid">
      <div className="landing-container">
        <Container>
          <h1 className="landing-header">Hi, I'm Delphine, web developer.</h1>
          <p className="landing-text">
            HTML/CSS | Javascript | React | NodeJS | MongoDB
          </p>
          <div className="landing-page-links">
            <a
              href="https://www.freecodecamp.org/delph"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="free code camp" />
            </a>

            <a
              href="https://www.github.com/delphk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" />
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
