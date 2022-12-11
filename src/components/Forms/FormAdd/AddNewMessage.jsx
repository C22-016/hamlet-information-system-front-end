import React, { useState } from 'react';
import { Container, Card, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const AddNewArchive = () => {
  // const [detailUser, setDetailUser] = useState({});
  // const [senderName, setName] = useState('');
  const [messageType, setMessageType] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [msg, setMsg] = useState('');
  // const { id } = useParams();
  const navigate = useNavigate();

  // const senderInfo = async () => {
  //   const response = await axios.get(API_ENDPOINT.GET_USER_BY_ID(id));
  //   setDetailUser(response.data);
  // };

  const saveMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('messageType', messageType);
    formData.append('messageContent', messageContent);
    try {
      await axios.post(API_ENDPOINT.MESSAGES, formData, {
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

  // try {
  //   await axios.post(API_ENDPOINT.MESSAGES, {
  //     // senderName: senderName,
  //     messageType: messageType,
  //     messageContent: messageContent,
  //   });
  //   navigate('/messages');
  // } catch (error) {
  //   if (error.response) {
  //     setMsg(error.response.data.msg);
  //   }
  // }

  return (
    <Container>
      <Col lg={12} className="grid-margin stretch-card pt-5 my-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Messages</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Add New Messages
            </Card.Subtitle>
            <Form onSubmit={saveMessage}>
              <p className="text-center">{msg}</p>
              {/* <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  value={senderName}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukan Nama"
                />
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label>Tipe Pesan</Form.Label>
                <Form.Select
                  value={messageType}
                  onChange={(e) => setMessageType(e.target.value)}
                >
                  <option value="pengaduan">Pengaduan</option>
                  <option value="saran">Saran</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Isi Pesan</Form.Label>
                <Form.Control
                  value={messageContent}
                  as="textarea"
                  rows={4}
                  onChange={(e) => setMessageContent(e.target.value)}
                  placeholder="Masukan isi Pesan"
                />
              </Form.Group>
              <Button
                type="submit"
                className="me-2"
                variant="success"
                size="md"
              >
                Kirim
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default AddNewArchive;
