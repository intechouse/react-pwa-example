import React from 'react';
import { NavBar } from '../../NavBar';

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

export default MainLayout;
