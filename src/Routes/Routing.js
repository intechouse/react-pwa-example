import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './../pages/auth/SignUp';
import SignIn from './../pages/auth/SignIn';
import { Home } from '../components/Home';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
