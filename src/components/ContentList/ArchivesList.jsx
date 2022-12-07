import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Row, Col, Dropdown, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import API_ENDPOINT from '../../globals/ApiEndpoint';

const ArchivesList = () => {
  const { user } = useSelector((state) => state.auth);

  const [archives, setArchives] = useState([]);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  const handleShowAlert = () => {
    setShowDangerAlert(true);
    setTimeout(() => {
      setShowDangerAlert(false);
    }, 2000);
  };

  const getArchives = async () => {
    const response = await axios.get(API_ENDPOINT.ARCHIVES);
    setArchives(response.data);
  };

  useEffect(() => {
    getArchives();
  }, []);

  const deleteArchive = async (archiveId) => {
    await axios.delete(API_ENDPOINT.DELETE_ARCHIVE(archiveId));
    handleShowAlert();
    getArchives();
  };

  return (
    <Container className="container-dashboard">
      <Alert
        variant="danger"
        show={showDangerAlert}
        onClose={() => setShowDangerAlert(false)}
        dismissible
      >
        <Alert.Heading>Archive berhasil dihapus</Alert.Heading>
      </Alert>
      {user && user.role !== 'user' && (

        <Card border="success" className="w-100" style={{ width: '18rem' }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Row>
              <Col md={2} className="text-center m-auto">
                <img src="./images/cloud_upload.svg" alt="archives" style={{ width: '50px' }} />
              </Col>
              <Col md={6} className="text-center p-2">
                <Card.Title>Archive</Card.Title>
                <Card.Text>Tambahkan dokumen yang ingin kamu bagikan disini.</Card.Text>
              </Col>
              <Col md={4} className="m-auto text-center">
                <Link to="/archives/add">
                  <Button variant="dark" className="w-50 inline-block">
                    Tambah
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
      <Card border="dark" className="w-100 mt-5 pb-5">
        <Card.Header>Shared Document</Card.Header>
        <Card.Body>
          <Row>
            {/* Card Archive Start */}
            {archives.map((archive) => (
              <Col lg={4} md={6} key={archive.uuid}>
                <Row className="p-4 border border-dark rounded m-2">
                  <div className="d-flex">
                    <img src="./images/folder-archive.svg" alt="folder" className="m-auto" style={{ width: '50px' }} />
                    <p className="fw-semibold m-auto p-2">{archive.name}</p>
                    <Dropdown className="m-auto">
                      <Dropdown.Toggle variant="light" className="border border-2"></Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href={archive.link}>
                          <Button variant="light" className="w-100">
                            Lihat
                          </Button>
                        </Dropdown.Item>

                        {user && user.role !== 'User' && (
                          <div>
                            <Dropdown.Item href={archive.link}>
                              <Link to={`/archives/update/${archive.uuid}`}>
                                <Button variant="light" className="w-100">
                                  Edit
                                </Button>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Button onClick={() => deleteArchive(archive.uuid)} variant="light" className="w-100">
                                Hapus
                              </Button>
                            </Dropdown.Item>
                          </div>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Row>
              </Col>
            ))}
            {/* Card Archive End */}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ArchivesList;
