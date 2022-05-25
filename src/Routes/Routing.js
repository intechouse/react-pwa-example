import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import SignUp from './../pages/auth/SignUp';
import SignIn from './../pages/auth/SignIn';
import {
  Feed,
  Profile,
  Password,
  MyFeed,
  NotFoundPage,
  UpdateProfile,
} from '../pages';

import { auth } from '../firebase-config';

const Routing = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/auth/register'
          element={isLoggedIn ? <Feed /> : <SignUp />}
        />
        <Route
          path='/auth/login'
          element={isLoggedIn ? <Feed /> : <SignIn />}
        />
        <Route path='/' element={isLoggedIn ? <Feed /> : <NotFoundPage />} />
        <Route
          path='/user/feed'
          element={isLoggedIn ? <Feed /> : <NotFoundPage />}
        />
        <Route
          path='/user/myfeed'
          element={isLoggedIn ? <MyFeed /> : <NotFoundPage />}
        />
        <Route
          path='/user/profile'
          element={isLoggedIn ? <Profile /> : <NotFoundPage />}
        />
        <Route
          path='/user/profile/update-profile'
          element={isLoggedIn ? <UpdateProfile /> : <NotFoundPage />}
        />
        <Route
          path='/user/password'
          element={isLoggedIn ? <Password /> : <NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
