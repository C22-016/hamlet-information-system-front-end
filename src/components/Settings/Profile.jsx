import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="p-5">
          <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="rounded-circle" alt="Foto Profil" style={{ width: '13rem' }} />
          </div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Ganti foto profil</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
        <Col md={6} className="p-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type="text" placeholder="Masukan nama lengkap" />
            </Form.Group>
            <Row>
              <Form.Label>Alamat</Form.Label>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="text" placeholder="Masukan alamat" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  {/* <Form.Label>Pilih dusun</Form.Label> */}
                  <Form.Select>
                    <option>RT 01</option>
                    <option>RT 02</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>No. Handphone</Form.Label>
              <Form.Control type="text" placeholder="Masukan nomor handphone" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukan email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Select>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </Form.Select>
            </Form.Group>
            <div className="text-end mt-4 p-3">
              <Button variant="dark" className="px-4">
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
