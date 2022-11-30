import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <i className="bi bi-list p-3"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="w-50 m-auto">
            <img src="./images/logo-navbar.png" alt="logo his" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush" className="w-100 text-center">
            <ListGroup.Item>
              <NavLink to="/dashboard">
                <Button className="w-100 fs-5 p-3" variant="light">
                  <i className="bi bi-columns pe-3"></i> Overview
                </Button>
              </NavLink>
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <NavLink to="/beranda">
                <Button className="w-100 fs-5 p-3" variant="light">
                  <i className="bi bi-house"></i> Beranda
                </Button>
              </NavLink>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <NavLink to="/broadcast">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-bell pe-3"></i> Broadcast
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/message">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-envelope pe-3"></i> Message
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/archive">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-cloud ps-0 pe-3"></i> Archive
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/event">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-calendar-event pe-3"></i> Event
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/user">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-people pe-3"></i> User
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/setting">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-gear pe-3"></i> Setting
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="#">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-box-arrow-left pe-3"></i> Logout
                </Button>
              </NavLink>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
