import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const FormUpdateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [rt, setRt] = useState('');
  const [telp, setTelp] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const getUserById = async () => {
    const response = await axios.get(API_ENDPOINT.GET_USER_BY_ID(id));
    setName(response.data.name);
    setEmail(response.data.email);
    // setPassword(response.data.password);
    // setConfPassword(response.data.confPassword);
    setRole(response.data.role);
    setGender(response.data.gender);
    setAddress(response.data.address);
    setRt(response.data.rt);
    setTelp(response.data.telp);
    setImage(response.data.image);
    setPreview(response.data.url);
  };

  useEffect(() => {
    getUserById();
  }, []);

  const loadImage = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confPassword', confPassword);
    formData.append('role', role);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('rt', rt);
    formData.append('telp', telp);
    formData.append('image', image);
    try {
      await axios.patch(API_ENDPOINT.UPDATE_USER_BY_ID(id), formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
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
            <Card.Subtitle className="mb-4 text-muted">Update User</Card.Subtitle>
            <Form onSubmit={updateUser}>
              <p className="text-center"><strong>{msg}</strong></p>
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
              <Form.Group className="mb-3">
                <Form.Label>Pilih Role</Form.Label>
                <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="admin">Admin</option>
                  <option value="staf">Staff</option>
                  <option value="user">User</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pilih Gender</Form.Label>
                <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="laki-laki">Laki-laki</option>
                  <option value="perempuan">Perempuan</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Masukan Alamat" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pilih RT</Form.Label>
                <Form.Select value={rt} onChange={(e) => setRt(e.target.value)}>
                  <option value="1">RT 1</option>
                  <option value="2">RT 2</option>
                  <option value="3">RT 3</option>
                  <option value="4">RT 4</option>
                  <option value="5">RT 5</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>No Telp</Form.Label>
                <Form.Control type="tel" value={telp} onChange={(e) => setTelp(e.target.value)} placeholder="Masukan No Telp" />
              </Form.Group>
              <Form.Group className="mb-3 image">
                <Form.Label>Foto profil</Form.Label>
                <Form.Control type="file" onChange={loadImage} />
              </Form.Group>

              {preview ? (
                <figure style={{ width: '200px' }}>
                  <img src={preview} alt="preview" />
                </figure>
              ) : (
                ''
              )}

              <Button type="submit" className="me-2" variant="success" size="md">
                Update
              </Button>
              {/* <Button type="submit" variant="secondary" size="md">
                Batal
              </Button> */}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default FormUpdateUser;
