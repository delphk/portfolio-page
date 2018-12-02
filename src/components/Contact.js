import React from "react";
import { Container, Button, Icon } from "semantic-ui-react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="landing-page-grid">
      <div className="contact-body">
        <Container>
          <h2>Let's work together</h2>
          <p className="contact-text">
            If you want get in touch, collaborate on a project or just say hi,
            click the button below to send me an email.
          </p>
          <a href="mailto:delphinekoh@hotmail.com">
            <Button color="grey" size="massive" id="contact-button">
              {" "}
              <Icon name="mail" />
              Contact me
            </Button>
          </a>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
