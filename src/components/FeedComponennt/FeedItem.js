import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';

import { db, auth } from '../../firebase-config';
import {
  collection,
  query,
  where,
  onSnapshot,
  getDoc,
} from 'firebase/firestore';

const FeedItem = ({ feedItem }) => {
  const q = query(collection(db, 'users'), where('uid', '==', feedItem.uid));
  const [user, setUser] = useState(null);
  console.log('query===>', q);
  const getData = async () => {
    onSnapshot(
      query(collection(db, 'users'), where('uid', '==', feedItem.uid)),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log('snapshot data => ', doc.data()?.uid);
        });
      }
    );
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
