import React from 'react';
import Button from 'react-bootstrap/Button';

const LoginHeader = () => {
  return (
    <div className="ms-3 mt-3">
      <Button variant="success" href="/">
        <i className="bi bi-arrow-left"></i> Kembali
      </Button>
    </div>
  );
};

export default LoginHeader;
