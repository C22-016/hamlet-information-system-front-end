/* eslint-disable object-curly-newline */
import React from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import './LoginPage.css';

const LoginForm = () => {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6 d-none d-md-block">
            <MDBCardImage src="./images/image-login.png" alt="login form" className="rounded-start w-100" />
          </MDBCol>

          <MDBCol md="6" className="my-auto">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex justify-content-center flex-row mt-2">
                <span className="h1 fw-bold mb-0 title">Selamat datang</span>
              </div>

              <h5 className="fw-normal text-center my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Masuk untuk mengakses ruang Anda
              </h5>

              <MDBInput wrapperClass="mb-4" label="Username" id="formControlLg" type="email" size="lg" />
              <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg" />

              <MDBBtn className="mb-4 px-5" type="submit" color="success" size="lg">
                Masuk
              </MDBBtn>
              <p className="mb-5 pb-lg-2 text-center" style={{ color: '#393f81' }}>
                Tidak punya akun?{' '}
                <a href="#!" className="text-decoration-none" style={{ color: '#00A551' }}>
                  Daftar sekarang
                </a>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default LoginForm;
