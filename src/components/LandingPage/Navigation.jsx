import {
  Container, Nav, Navbar, Button,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/logo-navbar.png" alt="Logo HIS" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-link" href="#home">
              Beranda <i className="bi bi-house" />
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#about">
              Tentang <i className="bi bi-people" />
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#features">
              Fitur <i className="bi bi-menu-button-wide" />{' '}
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#contact">
              Kontak <i className="bi bi-person-rolodex" />
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <NavLink to="/login">
              <Button variant="success" size="lg" className="his-btn">
                <span>
                  Masuk <i className="bi bi-box-arrow-in-right" />
                </span>
              </Button>
            </NavLink>
          </span>
        </Navbar.Collapse>
        <div className="dark-mode">
          <i className="bi bi-moon-fill" />
          <i className="bi bi-brightness-high d-none-dark" />
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
