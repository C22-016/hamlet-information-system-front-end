import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Badge,
  Image,
} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const DetailUser = () => {
  const [detailUser, setDetailUser] = useState({});
  const { id } = useParams();

  const getDetailUser = async () => {
    const response = await axios.get(API_ENDPOINT.GET_USER_BY_ID(id));
    setDetailUser(response.data);
  };

  useEffect(() => {
    getDetailUser();
  }, []);

  return (
  // <div className="py-5">
  //   <div className="py-5">
  //   <p>{detailUser.email}</p>
  //   <p>{detailUser.name}</p>
  //   <p>{detailUser.gender}</p>
  //   <p>{detailUser.address}</p>
  //   <p>{detailUser.rt}</p>
  //   <p>{detailUser.telp}</p>
  //   <p>{detailUser.role}</p>
  //   <img src={detailUser.url} style={{width: '40px'}} />
  //   </div>
  // </div>

    <Container className="container-dashboard">
      <Link to="/users">
        <Button size="md" variant="success" className="my-3">
          {' '}
          Kembali
        </Button>
      </Link>
      <Row>
        <Col md={8} className="">
          <Card className="shadow mb-4">
            <Card.Body>
              <Row>
                <Col sm={3}>
                  <Card.Text>Nama</Card.Text>
                </Col>
                <Col sm={9}>
                  <Card.Text className="text-muted">
                    {detailUser.name}
                  </Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3}>
                  <Card.Text>Email</Card.Text>
                </Col>
                <Col sm={9}>
                  <Card.Text className="text-muted">
                    {detailUser.email}
                  </Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3}>
                  <Card.Text>Jenis Kelamin</Card.Text>
                </Col>
                <Col sm={9}>
                  <Card.Text className="text-muted">
                    {detailUser.gender}
                  </Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3}>
                  <Card.Text>Alamat</Card.Text>
                </Col>
                <Col sm={9}>
                  <Card.Text className="text-muted">
                    {detailUser.address}
                  </Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3}>
                  <Card.Text>RT</Card.Text>
                </Col>
                <Col sm={9}>
                  <Card.Text className="text-muted">{detailUser.rt}</Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3}>
                  <Card.Text>Role</Card.Text>
                </Col>
                <Col sm={9}>
                  <Card.Text className="text-muted">
                    {detailUser.role}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="">
          <Card className="shadow mb-4">
            <Card.Body className="text-center">
              <Row>
                <Col md={12} className="p-3">
                  <Image
                    src={detailUser.url}
                    className="rounded-circle"
                    alt="Foto Profil"
                    style={{ width: '150px' }}
                    fluid
                  />
                  <p className="text-muted mt-4">Foto Profil</p>
                </Col>
              </Row>

              <hr />

              <Row>
                <Card.Text className="mb-4">
                  <strong>Riwayat Pengaduan</strong>
                </Card.Text>
                <Card.Text className="mb-1">
                  Jalan Rusak akibat serangan titan{' '}
                  <Badge bg="warning" text="dark">
                    Sedang diproses
                  </Badge>
                </Card.Text>
              </Row>
              <hr />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailUser;
