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
              // <Card className='mt-3 ' key={i + 1}>
              //   <Card.Body>
              //     <div className='feed-card-header'>
              //       <img
              //         src=' https://img.freepik.com/free-photo/pleasant-lookin…ears-casual-white-t-shirt_273609-16959.jpg?w=2000'
              //         className='feed-card-img'
              //         alt='...'
              //       ></img>
              //       <Card.Title className='ms-3'>{v.name}</Card.Title>
              //     </div>
              //     <Card.Text className='mt-3 ms-2'>{v.feed}</Card.Text>
              //   </Card.Body>
              // </Card>
            ))}
          </Col>
        </Row>
      )}
    </>
  );
};

export default ShowFeed;
