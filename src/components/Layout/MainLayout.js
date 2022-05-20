import React from 'react';

import { NavBar } from '../../NavBar';

function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default MainLayout;
