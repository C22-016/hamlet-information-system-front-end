import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Alert, Image, Row, Card, Col, Form, Button, Modal } from 'react-bootstrap';
import { LoginUser, reset } from '../../features/authSlice';
import './LoginPage.css';
import { LogoLogin } from '../../materials';

const LoginForm = () => {
  const [showDemo, setShowDemo] = useState(false);
  const handleClose = () => setShowDemo(false);
  const handleShow = () => setShowDemo(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/dashboard');
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(
      LoginUser({
        email,
        password,
      })
    );
  };
  return (
    <Container>
      <Card className="py-4 my-4 shadow">
        <Row>
          <Col md={6} className="d-none d-md-block">
            <Image src={LogoLogin} alt="login form" className="rounded-start fluid" />
          </Col>
          <Col md={6} className="my-auto">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-center flex-row mt-2">
                <span className="h1 fw-bold mb-0 title">Selamat datang</span>
              </div>
              <h5 className="fw-normal text-center my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Masuk untuk mengakses ruang Anda
              </h5>
              <Form onSubmit={Auth}>
                {isError && (
                  <Alert show={show} variant="danger" className="text-center" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{message}</Alert.Heading>
                  </Alert>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukan Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Password" />
                </Form.Group>
                <Button className="mb-4 px-5 w-100" type="submit" variant="success" onClick={() => setShow(true)}>
                  {isLoading ? 'Loading...' : 'Masuk'}
                </Button>
              </Form>
              <Button variant="outline-success" onClick={handleShow}>
                Akun Demo
              </Button>

              <Modal show={showDemo} size="lg" centered onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Daftar Akun Demo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col md={4}>
                      <p className="fw-semibold">Admin</p>
                      <p>
                        Email: admin@gmail.com <br /> Password: 123456
                      </p>
                    </Col>
                    <Col md={4}>
                      <p className="fw-semibold">Staf</p>
                      <p>
                        Email: staf@gmail.com <br /> Password: 123456
                      </p>
                    </Col>
                    <Col md={4}>
                      <p className="fw-semibold">User</p>
                      <p>
                        Email: user@gmail.com <br /> Password: 123456
                      </p>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default LoginForm;
