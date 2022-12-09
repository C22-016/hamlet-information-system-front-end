import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout';
import { Privacy } from '../../components';
import { getMe } from '../../features/authSlice';

const SettingPrivacy = () => {
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
        <Privacy />
      </Container>
    </Layout>
  );
};

export default SettingPrivacy;
