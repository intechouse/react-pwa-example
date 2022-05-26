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
        {/* <div className='feed-card-header'>
          <img
            src=' https://img.freepik.com/free-photo/pleasant-lookin…ears-casual-white-t-shirt_273609-16959.jpg?w=2000'
            className='feed-card-img'
            alt='...'
          ></img>
          <Card.Title className='ms-3'>{user.name}</Card.Title>
        </div> */}
        <Card.Text className='mt-3 ms-2'>Name : {user?.displayName}</Card.Text>
        <Card.Text className='mt-3 ms-2'>Email : {user?.email}</Card.Text>
        <Button
          onClick={() => navigate('/user/profile/update-profile')}
          className='mt-3 ps-sm-4 pe-sm-4'
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
