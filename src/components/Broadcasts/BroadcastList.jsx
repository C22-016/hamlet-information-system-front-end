import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

const BroadcastList = () => {
  const [broadcasts, setBroadcasts] = useState([]);

  const getBroadcasts = async () => {
    const response = await axios.get('http://localhost:5000/broadcast');
    setBroadcasts(response.data);
  };

  useEffect(() => {
    getBroadcasts();
  }, []);

  const deleteBroadcasts = async () => {
    await axios.delete('http://localhost:5000/broadcast');
    getBroadcasts();
  };

  return (
    <Container className="shadow p-3 rounded">
      <p className="fw-semibold fs-4 mb-3">Riwayat Notifikasi</p>
      <div className="mb-3 text-end">
        <Button variant="outline-dark" onClick={() => deleteBroadcasts()}>
          Hapus
        </Button>
      </div>
      {broadcasts.map((broadcast) => (
        <div key={broadcast.broadcast_id}>
          <div className="border border-1 p-3 mb-3 rounded-3">
            <p className="fw-semibold fs-6">{broadcast.title}</p>
            <p>{broadcast.content}</p>
            <p>
              <small>{broadcast.createdAt}</small>
            </p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default BroadcastList;
