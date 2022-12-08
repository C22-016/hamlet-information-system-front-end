/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import './LandingPage.css';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessAlert, setshowSuccessAlert] = useState(false);

  const handleShowAlert = () => {
    setshowSuccessAlert(true);
    setTimeout(() => {
      setshowSuccessAlert(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      Name: name,
      Email: email,
      Message: message,
    };

    axios.post('https://sheet.best/api/sheets/e3a90e34-acf0-42ef-828e-17edb6920c27', data).then((response) => {
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
      handleShowAlert();
    });
  };

  return (
    <section id="contact" className="pt-4">
      <Container>
        <h2 className="section-title text-center pb-4">Kontak Kami</h2>
        <Row className="pt-4">
          <Col md={6} lg={8} className=" mb-5">
            <Alert variant="success" show={showSuccessAlert} onClose={() => setshowSuccessAlert(false)} dismissible>
              <Alert.Heading>Pesan kamu sudah kami terima</Alert.Heading>
            </Alert>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label for="name" className="contact-us">
                  Nama
                </Form.Label>
                <Form.Control type="text" placeholder="Masukan nama anda..." className="form-control border-input border-opacity-25" id="name" aria-describedby="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label for="email" className="contact-us">
                  Email
                </Form.Label>
                <Form.Control type="email" className="form-control border-input border-opacity-25" id="email" aria-describedby="email" name="email" placeholder="Masukan email anda..." value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label for="message" className="contact-us">
                  Pesan
                </Form.Label>
                <Form.Control as="textarea" rows={3} className="border-input border-opacity-25" id="message" name="message" placeholder="Masukan pesan anda..." value={message} onChange={(e) => setMessage(e.target.value)} />
              </Form.Group>

              <Button type="submit" className="btn btn-form btn-send">
                <i className="bi bi-envelope"></i> {loading ? 'Loading...' : 'Kirim'}
              </Button>
            </Form>
          </Col>

          <Col lg={4} md={6} className="d-block">
            <div className="contact-image">
              <img src="./kontak-kami.svg" className="d-block w-100 img-fluid vector-about d-none d-md-block" alt="Gambar Kontak Kami" />
              <div className="d-flex">
                <i className="bi bi-geo-alt"></i>
                <p className="fw-semibold ps-2 contact-us">Jakarta, Indonesia</p>
              </div>
              <div className="d-flex">
                <i className="bi bi-telephone"></i>
                <p className="fw-semibold ps-2 contact-us">+62xxxxxxxxx</p>
              </div>
              <div className="d-flex">
                <i className="bi bi-envelope"></i>
                <p className="fw-semibold ps-2 contact-us">hamletinformationsystem@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="svg-footer"
          fill="#00aa95"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Contact;
