import React from 'react';
import FeedItem from './FeedItem';
import { Card, Row, Col } from 'react-bootstrap';

const ShowFeed = ({ feedList }) => {
  return (
    <>
      {feedList && (
        <Row>
          <Col className='h-50 overflow-auto'>
            {feedList.map((feedItem, i) => (
              <FeedItem feedItem={feedItem} key={i + 1} />
            ))}
          </Col>
        </Row>
      )}
    </>
  );
};

export default ShowFeed;
