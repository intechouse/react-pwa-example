import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../firebase-config';
import FeedPostCard from './FeedPostCard';
import ShowFeed from './ShowFeed';

const FeedComponennt = () => {
  const [feedList, setFeedList] = useState([]);

  const getData = async () => {
    let ls = [];
    const querySnapshot = await getDocs(collection(db, 'feed'));
    console.log('check');
    querySnapshot.forEach((doc) => {
      ls.push(doc.data().feed);
    });
    setFeedList(ls);
  };

  useEffect(() => {
    getData();
    console.log('test');
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
