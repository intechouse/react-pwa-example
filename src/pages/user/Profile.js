import React from 'react';
import ProfileComponent from '../../components/ProfileComponent/UserProfile';

import { MainLayout } from '../../components/Layout';
const Profile = () => {
  return (
    <MainLayout>
      <ProfileComponent flag={true} />
    </MainLayout>
  );
};

export default Profile;
