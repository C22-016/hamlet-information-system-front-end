import React from 'react';
import {
  Container,
  Col,
  Row,
  Card,
  ProgressBar,
  Table,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <Container className="container-dashboard">
      <Row>
        <Col lg={9}>
          <Card className="shadow mb-4">
            <Card.Header className="text-center fw-bold">
              Aktivitas Terbaru
            </Card.Header>
            <Card.Body className="text-center">
              <Row className="mb-4">
                <Col sm={6}>
                  <Card.Text>
                    <Link to="/events">
                      <Button variant="outline-secondary">
                        <i className="bi bi-calendar-event"></i> Events
                      </Button>
                    </Link>
                  </Card.Text>
                </Col>
                <Col sm={6}>
                  <Card.Text>
                    <Link to="/broadcasts">
                      <Button variant="outline-secondary">
                        <i className="bi bi-megaphone"></i> Broadcasts
                      </Button>
                    </Link>
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm={6}>
                  <Card.Text>
                    <Link to="/archives">
                      <Button variant="outline-secondary">
                        <i className="bi bi-folder-symlink"></i> Archives
                      </Button>
                    </Link>
                  </Card.Text>
                </Col>
                <Col sm={6}>
                  <Card.Text>
                    <Link to="/messages">
                      <Button variant="outline-secondary">
                        <i className="bi bi-chat-left-dots"></i> Messages
                      </Button>
                    </Link>
                  </Card.Text>
                </Col>
              </Row>
              <hr />
              <Row className="mb-4">
                <Card.Text className="h-4">Detail User Account</Card.Text>
              </Row>
              <Row className="mb-4">
                <Col sm={4}>
                  <Card.Text>Admin</Card.Text>
                </Col>
                <Col sm={4}>
                  <Card.Text>Staf</Card.Text>
                </Col>
                <Col sm={4}>
                  <Card.Text>User</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow mb-4">
            <Card.Header className="text-center fw-bold">
              Statistik Pengguna
            </Card.Header>
            <Card.Body>
              <Card.Text className="mb-1 fw-bold">RT 1</Card.Text>
              <ProgressBar animated now={25} label="25%" variant="success" />
              <Card.Text className="mt-4 mb-1 fw-bold">RT 2</Card.Text>
              <ProgressBar animated now={15} label="15%" variant="success" />
              <Card.Text className="mt-4 mb-1 fw-bold">RT 3</Card.Text>
              <ProgressBar animated now={20} label="20%" variant="success" />
              <Card.Text className="mt-4 mb-1 fw-bold">RT 4</Card.Text>
              <ProgressBar animated now={15} label="15%" variant="success" />
              <Card.Text className="mt-4 mb-1 fw-bold">RT 5</Card.Text>
              <ProgressBar animated now={25} label="25%" variant="success" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card className="shadow mb-4">
            <Card.Header className="text-center fw-bold">Riwayat</Card.Header>
            <Card.Body>
              <Table responsive hover className="p-2">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>User Id</th>
                    <th>Nama</th>
                    <th>Role</th>
                    <th>Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover-his">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
