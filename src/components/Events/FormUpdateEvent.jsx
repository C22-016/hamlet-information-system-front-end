import React, { useState } from 'react';
import {
  Container, Card, Col, Form, Button, FormLabel
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormUpdateEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container>
      <Col lg={12} className="grid-margin stretch-card pt-5 my-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Events</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Update Event
            </Card.Subtitle>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukan Nama Event" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Deskripsi Event</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Masukan Deskripsi Event"
                  rows={3}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Unggah File</Form.Label>
                <Form.Control
                  type="file"
                  className="form-control visibility-hidden"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Lokasi</Form.Label>
                <Form.Control type="text" placeholder="Masukan Lokasi Event" />
              </Form.Group>
              <Form.Group className="mb-4">
                <FormLabel>Tanggal Event</FormLabel>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="form-date"
                />
              </Form.Group>
              <Button
                type="submit"
                className="me-2"
                variant="success"
                size="md"
              >
                Update
              </Button>
              <Button type="submit" variant="secondary" size="md">
                Batal
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default FormUpdateEvent;
