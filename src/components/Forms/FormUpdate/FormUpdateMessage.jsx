import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const FormUpdateMessage = () => {
  const [status, setStatus] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const getMesssageById = async () => {
    const response = await axios.get(API_ENDPOINT.GET_MESSAGE_BY_ID(id));
    setStatus(response.data.status);
  };

  useEffect(() => {
    getMesssageById();
  }, []);

  const updateMessage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('status', status);
    try {
      await axios.post(API_ENDPOINT.UPDATE_MESSAGE_BY_ID(id), formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      navigate('/messages');
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
            <Card.Title>Messages</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Update Status Messages
            </Card.Subtitle>
            <Form onSubmit={updateMessage}>
              <p className="text-center">
                <strong>{msg}</strong>
              </p>
              <Form.Group className="mb-3">
                <Form.Label>Ubah Status</Form.Label>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>belum ditangani</option>
                  <option>ditangani</option>
                </Form.Select>
              </Form.Group>
              <Button
                type="submit"
                className="me-2"
                variant="success"
                size="md"
              >
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

export default FormUpdateMessage;
