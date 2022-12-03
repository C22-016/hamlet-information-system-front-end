import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';
import Profile from '../components/Settings/Profile';

import { getMe } from '../features/authSlice';

const SettingProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector(((state) => state.auth));

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

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
