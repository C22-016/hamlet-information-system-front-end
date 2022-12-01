/* eslint-disable max-len */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Layout from './Layout';

const User = () => {
  return (
    <Layout>
      <Container className="container-dashboard">
        <Card border="success" className="w-100" style={{ width: '18rem' }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Row>
              <Col md={2} className="text-center m-auto">
                <img src="./images/page-user.svg" alt="user page" style={{ width: '50px' }} />
              </Col>
              <Col md={6} className="text-center p-2">
                <Card.Title>Users</Card.Title>
                <Card.Text>Tambahkan user yang ingin kamu bagikan disini.</Card.Text>
              </Col>
              <Col md={4} className="m-auto text-center">
                <NavLink to="/user/add">
                  <Button variant="dark" className="w-50 inline-block">
                    Tambah
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card border="dark" className="w-100 mt-5" style={{ width: '18rem' }}>
          <Card.Header>User List</Card.Header>
          <Card.Body>
            <Row>
              {/* Card User Start */}
              <Col md={4}>
                <Row className="p-2 border border-dark rounded m-2">
                  <Col md={3} className="text-center m-auto">
                    <img src="./images/doggo.jpg" alt="folder" className="rounded-circle" style={{ width: '70px' }} />
                  </Col>
                  <Col>
                    <p className="fw-semibold fs-5">Dilan</p>
                    <p>RT 03</p>
                  </Col>
                  <Col md={4} className="text-center m-auto">
                    <NavLink to="/user/edit">
                      <Button size="sm" variant="dark" className="me-3">
                        <i class="bi bi-pencil"></i>
                      </Button>
                    </NavLink>
                    <Button size="sm" variant="danger">
                      <i class="bi bi-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
              {/* Card User End */}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default User;
