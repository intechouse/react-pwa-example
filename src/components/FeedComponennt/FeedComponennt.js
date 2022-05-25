import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

import { db, auth } from '../../firebase-config';
import FeedPostCard from './FeedPostCard';
import ShowFeed from './ShowFeed';

const FeedComponennt = (props) => {
  const [feedList, setFeedList] = useState([]);
  const [myFeedList, setMyFeedList] = useState([]);
  const uid = localStorage.getItem('uid');

  const getData = async () => {
    onSnapshot(query(collection(db, 'feed')), (querySnapshot) => {
      const feeds = [];
      const myFeeds = [];
      querySnapshot.forEach((doc) => {
        feeds.push(doc.data());
        // console.log('feeds', doc.data());
        if (auth.currentUser?.uid === doc.data()?.uid) {
          myFeeds.push(doc.data());
        }
      });
      setFeedList(feeds);
      setMyFeedList(myFeeds);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className=' vh-100 ' fluid style={{ paddingTop: '50px' }}>
        <Row className='d-flex justify-content-center'>
          <Col sm={12} xs={12} md={10} lg={6} className=' mt-5'>
            <FeedPostCard />
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col sm={12} xs={12} md={10} lg={6} className=' mt-5'>
            <ShowFeed feedList={props.page ? feedList : myFeedList} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeedComponennt;
