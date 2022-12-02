import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Privacy = () => {
  return (
    <Container>
      <h2 className="ms-5">Ganti Kata Sandi</h2>
      <Form className="p-5">
        <Form.Group className="mb-3">
          <Form.Label>Kata Sandi Lama</Form.Label>
          <Form.Control type="password" placeholder="Masukan kata sandi lama" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Kata Sandi Baru</Form.Label>
          <Form.Control type="password" placeholder="Masukan kata sandi baru" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Konfirmasi Kata Sandi Baru</Form.Label>
          <Form.Control type="password" placeholder="Konfirmasi kata sandi baru" />
        </Form.Group>
        <div className="text-end mt-4 p-3">
          <Button variant="dark" className="px-4">
            Simpan
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Privacy;
