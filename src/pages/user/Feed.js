import React, { useEffect } from 'react';

import { MainLayout } from '../../components/Layout';
import { FeedComponennt } from '../../components/FeedComponennt';

function Feed() {
  return (
    <>
      <MainLayout>
        <FeedComponennt />
      </MainLayout>
    </>
  );
}

export default Feed;
