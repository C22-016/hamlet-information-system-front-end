import React from 'react';
import { NavBar, FooterDashboard } from '../components';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
      <FooterDashboard />
    </React.Fragment>
  );
};

export default Layout;
