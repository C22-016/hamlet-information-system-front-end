import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Row, Col, Dropdown, Modal, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../../globals/ApiEndpoint';

const EventList = () => {
  const { user } = useSelector((state) => state.auth);

  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowAlert = () => {
    setShowDangerAlert(true);
    setTimeout(() => {
      setShowDangerAlert(false);
    }, 2000);
  };

  const getEvents = async () => {
    const response = await axios.get(API_ENDPOINT.EVENTS);
    setEvents(response.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const deleteEvent = async (eventId) => {
    await axios.delete(API_ENDPOINT.DELETE_EVENT(eventId));
    handleShowAlert();
    getEvents();
  };

  return (
    <Container className="container-dashboard">
      <Alert
        variant="danger"
        show={showDangerAlert}
        onClose={() => setShowDangerAlert(false)}
        dismissible
      >
        <Alert.Heading>Event berhasil dihapus</Alert.Heading>
      </Alert>
      {user && user.role !== 'user' && (
        <Card border="success" className="w-100" style={{ width: '18rem' }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Row>
              <Col md={2} className="text-center m-auto">
                <img src="./images/page-user.svg" alt="user page" style={{ width: '50px' }} />
              </Col>
              <Col md={6} className="text-center p-2">
                <Card.Title>Events</Card.Title>
                <Card.Text>Tambahkan event yang ingin kamu bagikan disini.</Card.Text>
              </Col>
              <Col md={4} className="m-auto text-center">
                <Link to="/events/add">
                  <Button variant="dark" className="w-50 inline-block">
                    Tambah
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
      <Card border="dark" className="w-100 mt-5" style={{ width: '18rem' }}>
        <Card.Header>Event List</Card.Header>
        <Card.Body>
          <Row lg={3} md={2} sm={1} xs={1} className="g-4">
            {events.map((event) => (
              <Col key={event.uuid}>
                <Card>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <span className="my-auto">{event.name}</span>
                      {user && user.role !== 'user' && (
                        <Dropdown>
                          <Dropdown.Toggle variant="light" className="border border-2"></Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Link to={`/events/update/${event.uuid}`}>
                                <Button variant="light" className="w-100">
                                  Edit
                                </Button>
                              </Link>
                            </Dropdown.Item>

                            <Dropdown.Item>
                              <Button onClick={() => deleteEvent(event.uuid)} variant="light" className="w-100">
                                Hapus
                              </Button>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      )}
                    </Card.Title>
                    <Card.Img variant="top" className="py-3" src="./images/hero-image.jpg" />
                    <Card.Text>{event.desc}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <Button onClick={handleShow} variant="light">
                      <small>
                        Read more <i class="bi bi-chevron-right"></i>
                      </small>
                    </Button>
                  </Card.Footer>
                  <Modal show={show} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p className="text-end fst-italic">
                        <small>Dibuat pada {event.createdAt}</small>
                      </p>
                      <p className="fw-semibold fs-4 text-center">{event.name}</p>
                      <img className="rounded-4" src="./images/hero-image.jpg" alt="modal" />
                      <p className="pt-4">{event.desc}</p>
                      <p>Tanggal Event: {event.date}</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventList;
