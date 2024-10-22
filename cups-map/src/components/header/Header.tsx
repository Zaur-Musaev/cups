import { Navbar, Nav, Container, Button, FormText } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeLanguage } from "../../features/languageSlice"; // Импортируем action
import { translations } from "../../utils/constants";

const Header = () => {
  const language = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  const handleClickChangeLanguage = () => {
    const newLanguage =
      language.language === "en" ? translations.ka : translations.en;
    dispatch(changeLanguage(newLanguage)); // Передаём action в dispatch
  };

  return (
    <Navbar  expand="lg" className="header">
      <Container className="d-flex justify-content-start">
        <Navbar.Brand href="/" className="ms-0 me-0">
          <Logo />
        </Navbar.Brand>
        <FormText className="logoText"  >
        Cups Photo Project
        </FormText>
        {/* Кнопка для мобильного меню */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
          <Nav className="ms-auto nav-items">
            {/* Навигационные ссылки */}
            <Button variant="light" className="navButton">
              <Nav.Link as={Link} to="/home">
                {language.home}
              </Nav.Link>
            </Button>
            <Button variant="light" className="navButton">
              <Nav.Link as={Link} to="/about">
                {language.about}
              </Nav.Link>
            </Button>
            <Button variant="light" className="navButton">
              <Nav.Link as={Link} to="/contact">
                {language.contact}
              </Nav.Link>
            </Button>

              <img
                className="flag"
                onClick={handleClickChangeLanguage}
                alt="flag"
                src={language.flag}
              />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
