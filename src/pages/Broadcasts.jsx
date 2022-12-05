import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import Layout from './Layout';
import BroadcastForm from '../components/Broadcasts/BroadcastForm';
import BroadcastList from '../components/Broadcasts/BroadcastList';
import { getMe } from '../features/authSlice';

const Broadcasts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
    if (user && user.role === 'user') {
      navigate('/forbidden');
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <Container className="container-dashboard">
        <Row>
          <Col md={8} className="p-3">
            <BroadcastForm />
          </Col>
          <Col md={4} className="p-3">
            <BroadcastList />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Broadcasts;
