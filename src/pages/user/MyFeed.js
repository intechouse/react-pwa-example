import React, { useEffect } from 'react';

import { MainLayout } from '../../components/Layout';
import { FeedComponennt } from '../../components/FeedComponennt';

function MyFeed() {
  return (
    <>
      <MainLayout>
        <FeedComponennt />
      </MainLayout>
    </>
  );
}

export default MyFeed;
