import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Col, Row, Card, Button, Image } from 'react-bootstrap';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const DetailEvent = () => {
  const [detailEvent, setDetailEvent] = useState({});
  const { id } = useParams();

  const getDetailEvent = async () => {
    const response = await axios.get(API_ENDPOINT.GET_EVENT_BY_ID(id));
    setDetailEvent(response.data);
  };

  useEffect(() => {
    getDetailEvent();
  }, []);

  return (
    <Container className="container-dashboard">
      <Link to="/events">
        <Button size="md" variant="success" className="my-3">
          {' '}
          Kembali
        </Button>
      </Link>
      <Row>
        <Col md={4} className="p-2">
          <Card className="shadow mb-4">
            <Card.Body className="text-center">
              <Row>
                <Col md={12} className="p-3">
                  <Image
                    src={detailEvent.url}
                    className="rounded-circle"
                    alt="Foto Profil"
                    style={{ width: '150px' }}
                    fluid
                  />
                  <p className="mt-4 mb-3 display-5">
                    <strong>{detailEvent.name}</strong>
                  </p>
                  <p className="mt-4 mb-3">Tanggal Event: <em>{detailEvent.date}</em></p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className="p-2">
          <Card className="shadow mb-4">
            <Card.Body>
              <Row>
                <Card.Text className="text-center  display-6">Deskripsi Event</Card.Text>

                <Card.Text className="my-3 mx-2">{detailEvent.desc}</Card.Text>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailEvent;
