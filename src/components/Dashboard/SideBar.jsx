import React, { useState } from 'react';
import { Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../../features/authSlice';

const SideBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate('/');
  };

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
            <ListGroup.Item>
              <NavLink to="/broadcasts">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-bell pe-3"></i> Broadcasts
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/messages">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-envelope pe-3"></i> Messages
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/archives">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-cloud ps-0 pe-3"></i> Archives
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/events">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-calendar-event pe-3"></i> Events
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              {user && user.role !== 'user' && (
                <NavLink to="/users">
                  <Button className="w-100 p-3 fs-5" variant="light">
                    <i className="bi bi-people pe-3"></i> Users
                  </Button>
                </NavLink>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/settings/profile">
                <Button className="w-100 p-3 fs-5" variant="light">
                  <i className="bi bi-gear pe-3"></i> Settings
                </Button>
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                onClick={logout}
                className="w-100 p-3 fs-5"
                variant="light"
              >
                <i className="bi bi-box-arrow-left pe-3"></i> Logout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideBar;
