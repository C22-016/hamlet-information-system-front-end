import React from 'react';
import {
  Container,
  Col,
  Row,
  Card,
  Badge,
  Table,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MessageList = () => {
  return (
    <Container className="container-dashboard">
      <Card border="success" className="w-100" style={{ width: '18rem' }}>
        <Card.Body>
          <Row>
            <Col md={2} className="text-center m-auto">
              <h1>
                <i
                  style={{ width: '50px' }}
                  className="bi bi-chat-dots-fill"
                >
                </i>
              </h1>
            </Col>
            <Col md={6} className="text-center p-2">
              <Card.Title>Messages</Card.Title>
              <Card.Text>List Pesan Pengguna</Card.Text>
            </Col>
            <Col md={4} className="m-auto text-center">
              <Link to="/users/add">
                <Button variant="secondary" className="w-50 inline-block">
                  Send Notifications
                </Button>
              </Link>
            </Col>
            <Table responsive hover className="my-3">
              <thead className="his-thead">
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Pengaduan</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover-his">
                  <td>1</td>
                  <td>
                    {/* <img src={user.url} alt="profile" className="rounded-circle" style={{ width: '3em' }} /> */}
                    doggy
                  </td>
                  <td>Jalan anjay mabar RT01</td>
                  <td>Kerusakan jalan akibat banjir</td>
                  <td>
                    <Badge bg="warning" text="dark">
                      Sedang diproses
                    </Badge>
                  </td>
                  <td>
                    <Link to="/messages/update/1">
                      <Button size="sm" variant="dark" className="me-2">
                        <i class="bi bi-pencil"></i>
                        Perbarui Status
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr className="hover-his">
                  <td>2</td>
                  <td>
                    {/* <img src={user.url} alt="profile" className="rounded-circle" style={{ width: '3em' }} /> */}
                    cat
                  </td>
                  <td>Jalan anjay mabar RT01</td>
                  <td>kdrt di rumah doggy</td>
                  <td>
                    {' '}
                    <Badge bg="success">Selesai</Badge>
                  </td>
                  <td>
                    <Link to="/messages/update/1">
                      <Button size="sm" variant="dark" className="me-2">
                        <i className="bi bi-pencil"></i>
                        Perbarui Status
                      </Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MessageList;
