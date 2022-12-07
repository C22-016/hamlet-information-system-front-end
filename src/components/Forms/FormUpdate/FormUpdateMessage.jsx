import React from 'react';
import { Container, Card, Col, Form, Button } from 'react-bootstrap';

const FormUpdateMessage = () => {
  return (
    <Container>
      <Col lg={12} className="grid-margin stretch-card pt-5 my-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Messages</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Update Status Messages
            </Card.Subtitle>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Ubah Status</Form.Label>
                <Form.Select>
                  <option>Ditolak</option>
                  <option>Sedang Diproses</option>
                  <option>Selesai</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Berikan Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Isi Feedback"
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
