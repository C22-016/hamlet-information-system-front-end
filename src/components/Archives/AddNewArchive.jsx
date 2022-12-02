import React from 'react';
import {
  Container, Card, Col, Form, Button
} from 'react-bootstrap';

const AddNewArchive = () => {
  return (
    <Container>
      <Col lg={12} className="grid-margin stretch-card pt-5 my-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Archives</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Add New Archives
            </Card.Subtitle>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukan Nama Archive" />
              </Form.Group>
              <Form.Group className="mb-3">
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
              </Form.Group>
              <Button
                type="submit"
                className="me-2"
                variant="success"
                size="md"
              >
                Simpan
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

export default AddNewArchive;
