import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import { db } from '../../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const FeedItem = ({ feedItem }) => {
  const [user, setUser] = useState(null);
  const getData = async () => {
    const q = query(collection(db, 'users'), where('uid', '==', feedItem.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUser(doc.data());
    });
  };

  useEffect(() => {
    //   feedItem.uid
    // Load User data using the uid
    getData();
  }, [feedItem]);

  return (
    <Card className='mt-3'>
      <Card.Body>
        {user && (
          <div className='feed-card-header'>
            <img
              src=' https://img.freepik.com/free-photo/pleasant-lookin…ears-casual-white-t-shirt_273609-16959.jpg?w=2000'
              className='feed-card-img'
              alt='...'
            ></img>
            <Card.Title className='ms-3'>{user.name}</Card.Title>
          </div>
        )}
        <Card.Text className='mt-3 ms-2'>{feedItem.feed}</Card.Text>
      </Card.Body>
    </Card>
  );
};

FeedItem.propTypes = {
  feedItem: PropTypes.object.isRequired,
};

FeedItem.defaultProps = {
  feedItem: undefined,
};

export default FeedItem;
