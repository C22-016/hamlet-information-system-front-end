import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FormUpdateArchive = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getArchiveById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/archives/${id}`);
        setName(response.data.name);
        setLink(response.data.link);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getArchiveById();
  }, [id]);

  const updateArchive = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/archives/${id}`, {
        name: name,
        link: link,
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
            <Card.Subtitle className="mb-4 text-muted">Update Archives</Card.Subtitle>
            <Form onSubmit={updateArchive}>
              <p className="text-center">{msg}</p>
              <Form.Group className="mb-3">
                <Form.Label>Nama File</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukan Nama File" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Link</Form.Label>
                <Form.Control type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Masukan Link File" />
              </Form.Group>
              {/* <Form.Group className="mb-3">
                <Form.Label>Unggah File</Form.Label>
                <Form.Control
                  type="file"
                  className="form-control visibility-hidden"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Pilih Kategori</Form.Label>
                <Form.Select>
                  <option>BroadCast</option>
                  <option>Event</option>
                </Form.Select>
              </Form.Group> */}
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

export default FormUpdateArchive;
