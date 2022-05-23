import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

import { db } from '../../firebase-config';
import FeedPostCard from './FeedPostCard';
import ShowFeed from './ShowFeed';

const FeedComponennt = () => {
  const [feedList, setFeedList] = useState([]);

  const getData = async () => {
    onSnapshot(query(collection(db, 'feed')), (querySnapshot) => {
      const feeds = [];
      querySnapshot.forEach((doc) => {
        feeds.push(doc.data());
      });
      setFeedList(feeds);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className=' vh-100' fluid>
        <Row>
          <Col sm={2} xs={2}></Col>
          <Col sm={8} xs={8} className=' mt-5'>
            <FeedPostCard />
          </Col>
          <Col sm={2} xs={2}></Col>
        </Row>
        <Row>
          <Col sm={2} xs={2}></Col>
          <Col sm={8} xs={8} className=' mt-5'>
            <ShowFeed feedList={feedList} />
          </Col>
          <Col sm={2} xs={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default FeedComponennt;
