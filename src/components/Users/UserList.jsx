import React from 'react';
import {
  Container, Button, Card, Row, Col, Table
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './User.css';

const UserList = () => {
  return (
    <Container className="container-dashboard">
      <Card border="success" className="w-100" style={{ width: '18rem' }}>
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Row>
            <Col md={2} className="text-center m-auto">
              <img
                src="./images/page-user.svg"
                alt="user page"
                style={{ width: '50px' }}
              />
            </Col>
            <Col md={6} className="text-center p-2">
              <Card.Title>Users</Card.Title>
              <Card.Text>
                Tambahkan user yang ingin kamu bagikan disini.
              </Card.Text>
            </Col>
            <Col md={4} className="m-auto text-center">
              <NavLink to="/users/add">
                <Button variant="dark" className="w-50 inline-block">
                  Tambah
                </Button>
              </NavLink>
            </Col>
            <Table responsive bordered rounded hover className="my-3">
              <thead className="his-thead">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover-his">
                  <td>1</td>
                  <td><img src="./images/doggo.jpg" alt="folder" className="rounded-circle" style={{ width: '3em' }} /> Mark</td>
                  <td>Mark@gmail.com</td>
                  <td>Admin</td>
                  <td>
                    <NavLink to="/users/update/1">
                      <Button size="md" variant="dark" className="me-2">
                        <i class="bi bi-pencil"></i>
                      </Button>
                    </NavLink>
                    <Button size="md" variant="danger">
                      <i class="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
                <tr className="hover-his">
                  <td>2</td>
                  <td><img src="./images/doggo.jpg" alt="folder" className="rounded-circle" style={{ width: '3em' }} /> Jacob</td>
                  <td>Jacob@gmail.com</td>
                  <td>User</td>
                  <td>
                    <NavLink to="/users/update/2">
                      <Button
                        size="md"
                        variant="dark"
                        className="me-2"
                      >
                        <i class="bi bi-pencil"></i>
                      </Button>
                    </NavLink>
                    <Button size="md" variant="danger">
                      <i class="bi bi-trash"></i>
                    </Button>
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

export default UserList;
