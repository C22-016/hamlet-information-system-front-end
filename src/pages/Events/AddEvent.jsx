import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import { AddNewEvent } from '../../components';
import { getMe } from '../../features/authSlice';

const AddEvent = () => {
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
        <AddNewEvent />
    </Layout>
  );
};

export default AddEvent;
