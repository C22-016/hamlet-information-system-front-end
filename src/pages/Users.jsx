import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/Users/UserList';
import Layout from './Layout';
import { getMe } from '../features/authSlice';

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector(((state) => state.auth));

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
     <UserList />
    </Layout>
  );
};

export default Users;
