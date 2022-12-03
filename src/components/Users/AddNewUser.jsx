/* eslint-disable object-shorthand */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Container, Card, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNewUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate('/users');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Container>
      <Col lg={12} className="grid-margin stretch-card pt-5 my-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Users</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">Add New User</Card.Subtitle>
            <Form onSubmit={saveUser}>
              <p className="text-center">{msg}</p>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukan Nama" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukan Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Konfirmasi Password</Form.Label>
                <Form.Control type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="Konfirmasi Password" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Pilih Role</Form.Label>
                <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option>Admin</option>
                  <option>Staff</option>
                  <option>User</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Foto profil</Form.Label>
                <Form.Control type="file" value={image} onChange={(e) => setImage(e.target.value)} />
              </Form.Group>
              <Button type="submit" className="me-2" variant="success" size="md">
                Simpan
              </Button>
              <Button variant="secondary" size="md">
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
