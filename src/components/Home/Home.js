import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  let bool = true;
  const [logOut, setLogOut] = useState(bool);
  let authToken = sessionStorage.getItem('Auth Token');
  console.log('authToken', authToken);

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
