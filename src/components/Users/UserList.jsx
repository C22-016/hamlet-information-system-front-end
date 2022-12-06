import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  Table,
  Alert,
  // Modal
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './User.css';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  // const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleClickDelete = () => setShow(true);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (userId) => {
    // handleClose();
    await axios.delete(`http://localhost:5000/users/${userId}`);
    setShowAlert(true);
    getUsers();
  };

  // const handleDeleteItem = () => {
  //   deleteUser();
  //   setUsers((pre) => {
  //     const data = [...pre];
  //     return data.filter((user) => user.uuid !== deleteId);
  //   });
  //   setShow(false);
  // };

  return (
    <Container className="container-dashboard">
      <Alert variant="danger" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
      <Alert.Heading>Berhasil Menghapus Pengguna</Alert.Heading>
      </Alert>
      <Card border="success" className="w-100" style={{ width: '18rem' }}>
        <Card.Body>
          <Row>
            <Col md={2} className="text-center m-auto">
              <img src="./images/page-user.svg" alt="user page" style={{ width: '50px' }} />
            </Col>
            <Col md={6} className="text-center p-2">
              <Card.Title>Users</Card.Title>
              <Card.Text>Tambahkan user yang ingin kamu bagikan disini.</Card.Text>
            </Col>
            <Col md={4} className="m-auto text-center">
              <Link to="/users/add">
                <Button variant="dark" className="w-50 inline-block">
                  Tambah
                </Button>
              </Link>
            </Col>
            <Table responsive bordered rounded hover className="my-3">
              <thead className="his-thead">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr className="hover-his" key={user.uuid}>
                    <td>{index + 1}</td>
                    <td>
                      {/* <img src={user.url} alt="profile" className="rounded-circle" style={{ width: '3em' }} /> */}
                      {user.name}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <Link to={`/users/update/${user.uuid}`}>
                        <Button size="md" variant="dark" className="me-2">
                          <i class="bi bi-pencil"></i>
                        </Button>
                      </Link>
                      <Button onClick={() => deleteUser(user.uuid)} size="md" variant="danger">
                        <i class="bi bi-trash"></i>
                      </Button>
                      {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Hapus Pengguna</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            Apakah anda yakin untuk menghapus
                            <strong>{user.name} ?</strong>
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Batal
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => deleteUser(user.uuid)}
                          >
                            Hapus
                          </Button>
                        </Modal.Footer>
                      </Modal> */}
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

export default UserList;
