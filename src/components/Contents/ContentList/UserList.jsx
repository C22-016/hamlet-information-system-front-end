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
import API_ENDPOINT from '../../../globals/ApiEndpoint';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  // const handleClose = () => setShow(false);
  // const handleClickDelete = () => setShow(true);

  const getUsers = async () => {
    const response = await axios.get(API_ENDPOINT.USERS);
    setUsers(response.data);
  };

  // axios.get('http://localhost:5000/profiles/952e0c2c128e0287ea58ab2a6de6bc67').then((res) => {
  //     console.log(res);
  //   });

  // const getImage = async (id) => {
  //   const response = await axios.get(`http://localhost:5000/profiles/`);
  //   setUsers(response.data);
  // }

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (userId) => {
    // handleClose();
    await axios.delete(API_ENDPOINT.DELETE_USER(userId));
    handleShowAlert();
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
              <h1>
                <i style={{ width: '35em' }} className="bi bi-people"></i>
              </h1>
            </Col>
            <Col md={6} className="text-center p-2">
              <Card.Title>Users</Card.Title>
              <Card.Text>Tambahkan user yang ingin kamu bagikan disini.</Card.Text>
            </Col>
            <Col md={4} className="m-auto text-center">
              <Link to="/user/add">
                <Button variant="dark" className="w-50 inline-block">
                  Tambah
                </Button>
              </Link>
            </Col>
            <Table responsive bordered rounded hover className="my-3">
              <thead className="his-thead">
                <tr className="text-center">
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>RT</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr className="hover-his text-center" key={user.uuid}>
                    <td>{index + 1}</td>
                    <td className="text-start">
                      <img src={user.url} alt="sss" className="rounded-circle me-2" style={{ width: '3rem' }} />
                      {user.name}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.rt}</td>
                    <td>{user.role}</td>
                    <td>
                      <Link to={`/user/update/${user.uuid}`}>
                        <Button size="md" variant="dark" className="me-2">
                          <i class="bi bi-pencil" aria-label="Edit User" aria-required="true"></i>
                        </Button>
                      </Link>
                      <Link to={`/user/${user.uuid}`}>
                        <Button size="md" variant="secondary" className="me-2">
                          <i class="bi bi-eye" aria-label="Detail User" aria-required="true"></i>
                        </Button>
                      </Link>
                      <Button onClick={() => deleteUser(user.uuid)} size="md" variant="danger">
                        <i class="bi bi-trash" aria-label="Delete User" aria-required="true"></i>
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
