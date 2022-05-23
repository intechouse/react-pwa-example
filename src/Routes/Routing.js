import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import SignUp from './../pages/auth/SignUp';
import SignIn from './../pages/auth/SignIn';
import { Feed, Profile, Password, MyFeed } from '../pages';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/myfeed' element={<MyFeed />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/password' element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
