import React, { useState, useEffect } from 'react';
import { Container, Button, Alert
  // Modal
} from 'react-bootstrap';
import axios from 'axios';
import API_ENDPOINT from '../../globals/ApiEndpoint';

const BroadcastList = () => {
  const [broadcasts, setBroadcasts] = useState([]);
  const [showDangerAlert, setShowDangerAlert] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedBroadcastId, setSelectedBroadCastId] = useState({});

  // const handleClose = () => setShowModal(false);

  // const handleShow = () => {
  //   // setSelectedBroadCastId(Bid);
  //   setShowModal(true);
  // };

  const handleShowAlert = () => {
    setShowDangerAlert(true);
    setTimeout(() => {
      setShowDangerAlert(false);
    }, 2000);
  };

  const getBroadcasts = async () => {
    const response = await axios.get(API_ENDPOINT.BROADCASTS);
    setBroadcasts(response.data);
  };

  useEffect(() => {
    getBroadcasts();
  }, []);

  // const handleDeleteById = () => {
  //   axios.delete(API_ENDPOINT.DELETE_BROADCAST).then((res) => {
  //     const UpdatedBroadcasts = broadcasts.filter((broadcast) => broadcast_id !== selectedBroadcastId);
  //     setBroadcasts(UpdatedBroadcasts);
  //     handleShowAlert();
  //     getBroadcasts();
  //   });
  //   handleClose();
  // };

  const deleteBroadcastById = async (BroadcastId) => {
    await axios.delete(API_ENDPOINT.DELETE_BROADCAST(BroadcastId));
    getBroadcasts();
    handleShowAlert();
  };

  const deleteBroadcastAll = async () => {
    await axios.delete(API_ENDPOINT.DELETE_ALL_BROADCASTS);
    getBroadcasts();
    handleShowAlert();
  };

  return (
    <Container className="shadow p-3 rounded">
      <Alert
        variant="danger"
        show={showDangerAlert}
        onClose={() => setShowDangerAlert(false)}
        dismissible
      >
        <p>Pesan Broadcast berhasil dihapus</p>
      </Alert>
      <p className="fw-semibold fs-4 mb-3">Riwayat Notifikasi</p>
      <div className="mb-3 text-end">
        <Button variant="outline-danger" onClick={() => deleteBroadcastAll()}>
          Hapus Semua Broadcasts
        </Button>
      </div>

      {broadcasts.map((broadcast) => (
        <div key={broadcast.broadcast_id}>
          <div className="border border-1 p-3 mb-3 rounded-3">
            <p className="fw-semibold fs-6">{broadcast.title}</p>
            <p>{broadcast.content}</p>
            <p>
              <small className="text-muted">{broadcast.createdAt}</small>
            </p>
            <div className="mb-3 text-end">
              <Button
                variant="outline-danger"
                onClick={() => deleteBroadcastById(broadcast.broadcast_id)}
              >
                Hapus
              </Button>
              {/* <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Hapus Broadcast</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Apakah anda yakin ingin menghapus broadcast {broadcast.title} ?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleDeleteById}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default BroadcastList;
