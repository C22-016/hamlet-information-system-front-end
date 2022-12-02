import { Container, Navbar } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import SideBar from './SideBar';

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <SideBar />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Udin</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
