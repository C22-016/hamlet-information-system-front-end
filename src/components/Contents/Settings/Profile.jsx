import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [rt, setRt] = useState('');
  const [telp, setTelp] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   const getUserById = async () => {
  //     try {
  //       const response = await axios.get(API_ENDPOINT.ME);
  //       setName(response.data.name);
  //       setEmail(response.data.email);
  //       setAddress(response.data.address);
  //       setGender(response.data.gender);
  //       setRt(response.data.rt);
  //       setTelp(response.data.telp);
  //     } catch (error) {
  //       if (error.response) {
  //         setMsg(error.response.data.msg);
  //       }
  //     }
  //   };
  //   getUserById();
  // });

  
  const getMe = async () => {
    const response = await axios.get(API_ENDPOINT.ME);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
    setAddress(response.data.address);
    setRt(response.data.rt);
    setTelp(response.data.telp);
    setImage(response.data.image);
    setPreview(response.data.url);
  };

  useEffect(() => {
    getMe();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
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
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="p-5">
          <div className="d-flex justify-content-center mb-4">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                class="rounded-circle"
                style={{ width: '13rem' }}
              />
            ) : (
              ''
            )}
          </div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Ganti foto profil</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
        <Col md={6} className="p-5">
          <Form onSubmit={updateUser}>
            <p className="text-center">{msg}</p>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukan nama lengkap"
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Label>Alamat</Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Masukan alamat"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>RT</Form.Label>
                  <Form.Control
                    type="text"
                    value={rt}
                    onChange={(e) => setRt(e.target.value)}
                    placeholder="Masukan RT"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>No. Handphone</Form.Label>
              <Form.Control
                type="text"
                value={telp}
                onChange={(e) => setTelp(e.target.value)}
                placeholder="Masukan nomor handphone"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukan email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </Form.Select>
            </Form.Group>
            <div className="text-end mt-4 p-3">
              <Button variant="dark" className="px-4" type="submit">
                Simpan
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
