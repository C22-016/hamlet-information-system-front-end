import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import axios from 'axios';

const Notification = () => {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  const [broadcasts, setBroadcasts] = useState([]);

  const getBroadcasts = async () => {
    const response = await axios.get('http://localhost:5000/broadcast');
    setBroadcasts(response.data);
  };

  useEffect(() => {
    getBroadcasts();
  }, []);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} variant="light" className="mx-5 mb-2">
          <i class="bi bi-bell"></i>
        </Button>
        <ToastContainer className="p-3 m-5" position="top-end">
          {broadcasts.map((broadcast) => (
            <div key={broadcast.broadcast_id}>
              <Toast className="mb-3" show={showA} onClose={toggleShowA} delay={3000} autohide>
                <Toast.Header>
                  <strong className="me-auto">{broadcast.title}</strong>
                  <small>{broadcast.createdAt}</small>
                </Toast.Header>
                <Toast.Body>{broadcast.content}</Toast.Body>
              </Toast>
            </div>
          ))}
        </ToastContainer>
      </Col>
    </Row>
  );
};

export default Notification;
