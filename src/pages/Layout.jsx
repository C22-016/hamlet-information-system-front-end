/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
import React from 'react';
import NavBar from '../components/Dashboard/NavBar';
import Footer from '../components/Dashboard/Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
