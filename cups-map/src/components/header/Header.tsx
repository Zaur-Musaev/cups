import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeLanguage } from "../../features/languageSlice"; // Импортируем action
import { en, translations } from "../../utils/constants";

const Header = () => {
  const language = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch()


  const handleClickChangeLanguage = () => {
    const newLanguage = language.language === 'en' ? translations.ka : translations.en;
    dispatch(changeLanguage(newLanguage)); // Передаём action в dispatch
  }


  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      className="header"
      style={{ boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
    >
      <Container className="d-flex justify-content-start">
        <Navbar.Brand href="/" className="ms-0">
          <Logo />
        </Navbar.Brand>
        {/* Кнопка для мобильного меню */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
          <Nav className="ms-auto">
            {/* Навигационные ссылки */}
            <Button variant ="light" className="navButton">
              <Nav.Link as={Link} to="/home">
                {language.home}
              </Nav.Link>
            </Button>
            <Button variant ="light" className="navButton">
              <Nav.Link as={Link} to="/about">
                {language.about}
              </Nav.Link>
            </Button>
            <Button variant ="light" className="navButton">
              <Nav.Link as={Link} to="/contact">
                {language.contact}
              </Nav.Link>
            </Button>
            <Button variant ="light">
              <img
              onClick={handleClickChangeLanguage}
                alt="flag"
                src={language.flag}
                style={{
                  width: "32px",
                  height: "26px",
                  marginLeft: "0",
                }}
              />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
