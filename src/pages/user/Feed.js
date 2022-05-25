import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainLayout } from '../../components/Layout';
import { FeedComponennt } from '../../components/FeedComponennt';
import { auth } from '../../firebase-config';

function Feed() {
  let navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/');
      } else {
      }
    });
  }, []);

  return (
    <>
      <MainLayout>
        <FeedComponennt page={true} />
      </MainLayout>
    </>
  );
}

export default Feed;
