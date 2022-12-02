import React from 'react';
import {
  Container, Card, Col, Form, Button
} from 'react-bootstrap';

const AddNewUser = () => {
  return (
    <Container>
      <Col lg={12} className="grid-margin stretch-card pt-5 my-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Users</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Add New User
            </Card.Subtitle>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukan Nama" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukan Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukan Password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Konfirmasi Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Konfirmasi Password"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Pilih Role</Form.Label>
                <Form.Select>
                  <option>Admin</option>
                  <option>User</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit" className="me-2" variant="success" size="md">
                Simpan
              </Button>
              <Button type="submit" variant="secondary" size="md">
                Batal
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default AddNewUser;
