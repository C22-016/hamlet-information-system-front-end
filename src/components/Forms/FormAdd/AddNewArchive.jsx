import React, { useState } from 'react';
import { Container, Card, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const AddNewArchive = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [desc, setDesc] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const saveArchive = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_ENDPOINT.ARCHIVES, {
        name: name,
        link: link,
        desc: desc,
      });
      navigate('/archives');
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
            <Card.Title>Archives</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Add New Archives
            </Card.Subtitle>
            <Form onSubmit={saveArchive}>
              <p className="text-center">{msg}</p>
              <Form.Group className="mb-3">
                <Form.Label>Nama File</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukan Nama File"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Masukan Deskripsi File"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Link File</Form.Label>
                <Form.Control
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Masukan Link File"
                />
              </Form.Group>
              <Button
                type="submit"
                className="me-2"
                variant="success"
                size="md"
              >
                Simpan
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default AddNewArchive;
