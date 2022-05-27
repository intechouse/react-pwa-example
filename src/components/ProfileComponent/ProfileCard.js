import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { db } from '../../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ProfileCard = ({ user }) => {
  let navigate = useNavigate();

  return (
    <Card className='mt-3'>
      <Card.Body>
        <Card.Text className='mt-3 ms-2'>
          <strong>Name :</strong> {user?.displayName}
        </Card.Text>
        <hr />
        <Card.Text className='mt-3 ms-2'>
          <strong>Email :</strong> {user?.email}
        </Card.Text>
        <hr />
        <Button
          onClick={() => navigate('/user/profile/update-profile')}
          className='mt-3 ps-sm-4 pe-sm-4  profile-btn'
        >
          Update Profile
        </Button>
      </Card.Body>
    </Card>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
};

ProfileCard.defaultProps = {
  user: undefined,
};

export default ProfileCard;
