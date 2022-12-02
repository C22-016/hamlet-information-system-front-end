/* eslint-disable object-curly-newline */
import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import './LoginPage.css';
import { Button } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <MDBContainer className="py-5 my-5">
      <MDBCard>
        <MDBRow>
          <MDBCol md="6 d-none d-md-block">
            <MDBCardImage src="./images/login.gif" alt="login form" className="rounded-start fluid" />
          </MDBCol>

          <MDBCol md="6" className="my-auto">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex justify-content-center flex-row mt-2">
                <span className="h1 fw-bold mb-0 title">Selamat datang</span>
              </div>

              <h5 className="fw-normal text-center my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Masuk untuk mengakses ruang Anda
              </h5>

              <MDBInput wrapperClass="mb-4" placeholder="Username" type="text" size="md" />
              <MDBInput wrapperClass="mb-4" placeholder="Password" type="password" size="md" />

              <Button className="mb-4 px-5" type="submit" variant="success" size="lg">
                Masuk
              </Button>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default LoginForm;
