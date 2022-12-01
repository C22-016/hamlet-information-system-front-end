/* eslint-disable max-len */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Layout from './Layout';

const Archive = () => {
  return (
    <Layout>
      <Container className="container-dashboard">
        <Card border="success" className="w-100" style={{ width: '18rem' }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Row>
              <Col md={2} className="text-center m-auto">
                <img src="./images/cloud_upload.svg" alt="archive" style={{ width: '50px' }} />
              </Col>
              <Col md={6} className="text-center p-2">
                <Card.Title>Archive</Card.Title>
                <Card.Text>Tambahkan dokumen yang ingin kamu bagikan disini.</Card.Text>
              </Col>
              <Col md={4} className="m-auto text-center">
                <NavLink to="/archive/add">
                  <Button variant="dark" className="w-50 inline-block">
                    Tambah
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card border="dark" className="w-100 mt-5" style={{ width: '18rem' }}>
          <Card.Header>Shared Document</Card.Header>
          <Card.Body>
            <Row>
              {/* Card Archive Start */}
              <Col md={4}>
                <Row className="p-2 border border-dark rounded m-2">
                  <Col md={3} className="text-center m-auto">
                    <img src="./images/folder-archive.svg" alt="folder" style={{ width: '50px' }} />
                  </Col>
                  <Col>
                    <p className="fw-semibold">Undangan Kerja Bakti</p>
                    <Button size="sm" variant="dark" className="me-3">
                      <i class="bi bi-eye"></i>
                    </Button>
                    <Button size="sm" variant="danger">
                      <i class="bi bi-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
              {/* Card Archive End */}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default Archive;
