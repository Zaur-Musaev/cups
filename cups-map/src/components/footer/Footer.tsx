import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="mt-2 footer"
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        height: '10%',
        backgroundColor: "whitesmoke",
        textAlign: "center",
        padding: "2px",
        boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      }}
    >
      <Row className="w-100 text-center">
        <Col xs={12}>
          <p className="mb-1 fw-bold">Cups Photo Project</p>
        </Col>
        <Col md={6} className="text-muted mb-1">
          © 2024 Cups Project. All rights reserved.
        </Col>
        <Col md={6}>
          <a
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
          >
            Twitter
          </a>
          <a
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
