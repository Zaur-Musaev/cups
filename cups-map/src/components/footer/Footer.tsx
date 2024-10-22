import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="footer"
    >
      <Row className="w-100 text-center">
        <Col>
          <p className="">Cups Photo Project</p>
        </Col>
        <Col  className="">
          © 2024 Cups Project. All rights reserved.
        </Col>
        <Col >
          <a
            style={{color:'#E66446'}}
            href="mailto:contact@cupsproject.com"
            className="text-decoration-none me-3"
          >
            Contact us
          </a>
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/cupsproject"
            target="_blank"
            className="text-decoration-none me-3"
            style={{color:'#E66446'}}
          >
            Twitter
          </a>
          <a
            style={{color:'#E66446'}}
            rel="noopener noreferrer"
            href="https://github.com/cupsproject"
            target="_blank"
            className="text-decoration-none"
          >
            GitHub
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
