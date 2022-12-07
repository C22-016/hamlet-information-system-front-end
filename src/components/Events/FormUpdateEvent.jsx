/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Form, Button, FormLabel } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FormUpdateEvent = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getEventById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events/${id}`);
        setName(response.data.name);
        setDesc(response.data.desc);
        setDate(response.data.date);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getEventById();
  }, [id]);

  const updateEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/events/${id}`, {
        name: name,
        desc: desc,
        date: date,
      });
      navigate('/events');
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
            <Card.Title>Events</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">Update Event</Card.Subtitle>
            <Form onSubmit={updateEvent}>
              <p className="text-center">{msg}</p>
              <Form.Group className="mb-3">
                <Form.Label>Nama Event</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukan Nama Event" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Deskripsi Event</Form.Label>
                <Form.Control as="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Masukan Deskripsi Event" rows={3} />
              </Form.Group>
              {/* <Form.Group className="mb-3">
                <Form.Label>Unggah File</Form.Label>
                <Form.Control type="file" className="form-control visibility-hidden" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Lokasi</Form.Label>
                <Form.Control type="text" placeholder="Masukan Lokasi Event" />
              </Form.Group> */}
              <Form.Group className="mb-4">
                <FormLabel>Tanggal Event</FormLabel>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-date" />
              </Form.Group>
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

export default FormUpdateEvent;
