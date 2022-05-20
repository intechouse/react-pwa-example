import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  let authToken = sessionStorage.getItem('Auth Token');

  useEffect(() => {
    if (authToken) {
      navigate('/feed');
    }

    if (!authToken) {
      navigate('/login');
    }
  }, []);

  return <div>Feed</div>;
};

export default Home;
