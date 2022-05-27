import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

import UpdateProfile from './UpdateProfile';
import ProfileCard from './ProfileCard';
import { db, auth } from '../../firebase-config';

const ProfileComponent = (props) => {
  const [feedList, setFeedList] = useState([]);
  const [myFeedList, setMyFeedList] = useState([]);

  const user = auth?.currentUser;

  return (
    <>
      <Container className=' vh-100 ' fluid style={{ paddingTop: '50px' }}>
        <Row className='d-flex justify-content-center'>
          <Col sm={12} xs={12} md={10} lg={6} className=' mt-5'>
            {/* <h1>Name : {auth.currentUser.displayName}</h1> */}
            {props?.flag ? (
              <ProfileCard user={user} />
            ) : (
              <UpdateProfile user={user} />
            )}
          </Col>
        </Row>
        {/* <Row className='d-flex justify-content-center'>
          <Col sm={12} xs={12} md={10} lg={6} className=' mt-5'>
            <h2>Helo</h2>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default ProfileComponent;
