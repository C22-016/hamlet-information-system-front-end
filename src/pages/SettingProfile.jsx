import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Layout from './Layout';
import Profile from '../components/Settings/Profile';

const SettingProfile = () => {
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
        <Profile />
      </Container>
    </Layout>
  );
};

export default SettingProfile;
