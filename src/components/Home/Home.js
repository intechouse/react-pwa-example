import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  let bool = true;
  const [logOut, setLogOut] = useState(bool);
  let authToken = sessionStorage.getItem('Auth Token');
  console.log('authToken', authToken);

  //let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    console.log('authToken', authToken);
    console.log('run');
    if (authToken) {
      navigate('/home');
    }

    if (!authToken) {
      navigate('/login');
    }
  }, [logOut]);

  return (
    <div>
      Home
      <Button
        onClick={() => {
          sessionStorage.removeItem('Auth Token');
          setLogOut(!bool);
        }}
      >
        LogOut
      </Button>
    </div>
  );
};

export default Home;
