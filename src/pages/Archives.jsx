import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import ArchivesList from '../components/Archives/ArchivesList';
import { getMe } from '../features/authSlice';

const Archives = () => {
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
      <ArchivesList />
    </Layout>
  );
};

export default Archives;
