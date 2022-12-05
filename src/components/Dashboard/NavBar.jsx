import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Navbar } from 'react-bootstrap';
import SideBar from './SideBar';

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <SideBar />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p>
              Signed in as: <strong>{user && user.name}</strong>
            </p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
