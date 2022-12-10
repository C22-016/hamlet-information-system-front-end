import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { LoginHeader, LoginForm, LoginFooter } from '../../components';

const LoginPage = () => {
  return (
    <>
      <LoginHeader />
      <Container>
        <Alert key="warning" variant="warning" className="text-center mt-3">
          Jika tidak bisa login, mohon coba kembali menggunakan browser <strong>Mozilla Firefox</strong>
        </Alert>
      </Container>
      <LoginForm />
      <LoginFooter />
    </>
  );
};

export default LoginPage;
