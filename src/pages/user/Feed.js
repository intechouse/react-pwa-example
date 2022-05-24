import React from 'react';

import { MainLayout } from '../../components/Layout';
import { FeedComponennt } from '../../components/FeedComponennt';

function Feed() {
  return (
    <>
      <MainLayout>
        <FeedComponennt page={true} />
      </MainLayout>
    </>
  );
}

export default Feed;
