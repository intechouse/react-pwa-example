import React from 'react';
import { NavBar } from '../../NavBar';

function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <h1>main</h1>
      {children}
    </div>
  );
}

export default MainLayout;
