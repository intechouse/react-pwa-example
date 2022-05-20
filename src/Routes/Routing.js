import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import SignUp from '../components/Login/SignUp';
import SignIn from '../components/Login/SignIn';
import { Home } from '../components/Home';
import { Feed, Profile, Password } from '../pages';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/password' element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
