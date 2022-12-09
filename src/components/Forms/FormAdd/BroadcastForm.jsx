import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const BroadcastForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [msg, setMsg] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const navigate = useNavigate();

  const handleShowAlert = () => {
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 2000);
  };

  const saveBroadcast = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_ENDPOINT.BROADCASTS, {
        title: title,
        content: content,
      });
      handleShowAlert();
      navigate('/broadcasts');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Container>
      <Alert
        variant="success"
        show={showSuccessAlert}
        onClose={() => setShowSuccessAlert(false)}
        dismissible
      >
        <p>Pesan Broadcast berhasil dibuat</p>
      </Alert>
      <p className="fw-semibold fs-4 px-5">Kirim Notifikasi</p>
      <Form className="p-5" onSubmit={saveBroadcast}>
        <p className="text-center">{msg}</p>
        <Form.Group className="mb-4">
          <Form.Label>Judul</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Masukan judul notifikasi"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Pesan</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Masukan pesan notifikasi"
          />
        </Form.Group>
        <div className="text-end mt-4 p-3">
          <Button type="submit" variant="dark" className="px-4">
            Kirim
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default BroadcastForm;
