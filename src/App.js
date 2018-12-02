import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main">
          <section id="landingpage">
            <LandingPage />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
