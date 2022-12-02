/* eslint-disable object-curly-newline */
import React from 'react';
import { Container, Button, Card, Row, Col, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const EventList = () => {
  return (
    <Container className="container-dashboard">
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
              <NavLink to="/events/add">
                <Button variant="dark" className="w-50 inline-block">
                  Tambah
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card border="dark" className="w-100 mt-5" style={{ width: '18rem' }}>
        <Card.Header>Event List</Card.Header>
        <Card.Body>
          <Row lg={3} md={2} sm={1} xs={1} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <span className="my-auto">Arisan RW</span>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" className="border border-2"></Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <NavLink to="/events/update/1">
                            <Button variant="light" className="w-100">
                              Edit
                            </Button>
                          </NavLink>
                        </Dropdown.Item>

                        <Dropdown.Item>
                          <Button variant="light" className="w-100">
                            Hapus
                          </Button>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Title>
                  <Card.Img variant="top" className="py-3" src="./images/hero-image.jpg" />
                  <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
                <Card.Footer className="text-end">
                  <small>
                    Read more <i class="bi bi-chevron-right"></i>
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventList;
