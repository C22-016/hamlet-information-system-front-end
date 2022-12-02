/* eslint-disable object-curly-newline */
import React from 'react';
import { Container, Button, Card, Row, Col, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ArchivesList = () => {
  return (
    <Container className="container-dashboard">
      <Card border="success" className="w-100" style={{ width: '18rem' }}>
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Row>
            <Col md={2} className="text-center m-auto">
              <img src="./images/cloud_upload.svg" alt="archives" style={{ width: '50px' }} />
            </Col>
            <Col md={6} className="text-center p-2">
              <Card.Title>Archive</Card.Title>
              <Card.Text>Tambahkan dokumen yang ingin kamu bagikan disini.</Card.Text>
            </Col>
            <Col md={4} className="m-auto text-center">
              <NavLink to="/archives/add">
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
            <Col lg={4} md={6}>
              <Row className="p-4 border border-dark rounded m-2">
                {/* <Col md={3} className="text-center m-auto">
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
                  </Col> */}
                <div className="d-flex">
                  <img src="./images/folder-archive.svg" alt="folder" className="m-auto" style={{ width: '60px' }} />
                  <p className="fw-semibold fs-5 m-auto p-2">Undangan Kerja Bakti</p>
                  <Dropdown className="m-auto">
                    <Dropdown.Toggle variant="light" className="border border-2"></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <NavLink to="#">
                          <Button variant="light" className="w-100">
                            Lihat
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
                </div>
              </Row>
            </Col>
            {/* Card Archive End */}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ArchivesList;
