import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Layout from './Layout';
import Privacy from '../components/Settings/Privacy';

const SettingPrivacy = () => {
  return (
    <Layout>
      <Container className="container-dashboard">
        <div className="px-5 pb-5">
          <NavLink to="/settings/profile">
            <Button variant="light">Profile Setting</Button>
          </NavLink>
          <NavLink to="/settings/privacy">
            <Button variant="light">Privacy Setting</Button>
          </NavLink>
        </div>
        <Privacy />
      </Container>
    </Layout>
  );
};

export default SettingPrivacy;
