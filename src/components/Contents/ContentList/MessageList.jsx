import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Row,
  Card,
  Badge,
  Table,
  Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const MessageList = () => {
  const { user } = useSelector((state) => state.auth);

  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await axios.get(API_ENDPOINT.MESSAGES);
    setMessages(response.data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Container className="container-dashboard">
      <Card border="success" className="w-100" style={{ width: '18rem' }}>
        <Card.Body>
          <Row>
            <Col md={2} className="text-center m-auto">
              <h1>
                <i
                  style={{ width: '50px' }}
                  className="bi bi-chat-dots-fill"
                >
                </i>
              </h1>
            </Col>
            <Col md={6} className="text-center p-2">
              <Card.Title>Messages</Card.Title>
              <Card.Text>List Pesan Pengguna</Card.Text>
            </Col>
            <Link to="/message/add">
              <Button variant="secondary" className="w-50 inline-block">
                Buat Pengaduan
              </Button>
            </Link>
            <Col md={4} className="m-auto text-center"></Col>

            <Table responsive hover className="my-3">
              <thead className="his-thead">
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Tipe</th>
                  <th>Isi Pesan</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message, index) => (
                <tr className="hover-his" key={message.uuid}>
                  <td>{index} + 1</td>
                  <td>
                    {/* <img src={user.url} alt="profile" className="rounded-circle" style={{ width: '3em' }} /> */}
                    {message.senderName}
                  </td>
                  <td>{message.message_type}</td>
                  <td>{message.message_content}</td>
                  <td>
                    <Badge bg="warning" text="dark">
                      Sedang diproses
                    </Badge>
                  </td>
                  <td>
                    <Link to="/messages/update/1">
                      <Button size="sm" variant="dark" className="me-2">
                        <i class="bi bi-pencil"></i>
                        Perbarui Status
                      </Button>
                    </Link>
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MessageList;
