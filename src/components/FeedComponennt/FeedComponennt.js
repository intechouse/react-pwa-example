import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../firebase-config';
import FeedPostCard from './FeedPostCard';
import ShowFeed from './ShowFeed';

const FeedComponennt = (props) => {
  const [feedList, setFeedList] = useState([]);
  const [myFeedList, setMyFeedList] = useState([]);
  const uid = localStorage.getItem('uid');

  const getData = async () => {
    let ls = [];
    let uls = [];
    const querySnapshot = await getDocs(collection(db, 'feed'));

    querySnapshot.forEach((doc) => {
      ls.push(doc.data());
      if (uid === doc.data()?.uid) {
        uls.push(doc.data());
      }
    });
    setFeedList(ls);
    setMyFeedList(uls);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log('Feed data', feedList);
  return (
    <>
      <Container className=' vh-100 ' fluid>
        <Row className='d-flex justify-content-center'>
          <Col sm={12} xs={12} md={10} lg={6} className=' mt-5'>
            <FeedPostCard />
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col sm={12} xs={12} md={10} lg={6} className=' mt-5'>
            <ShowFeed feedList={props?.page ? feedList : myFeedList} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeedComponennt;
