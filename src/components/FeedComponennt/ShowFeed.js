import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const ShowFeed = ({ feedList }) => {
  console.log(feedList);
  return <>
  {feedList && (
    <Row>
      <Col className='h-50 overflow-auto'>
        {/* <Card> */}
        {feedList.map((v, i) => (
          <Card className='mt-3 ' key={i + 1}>
            <Card.Body>
              <div className='feed-card-header'>
                <img
                  src=' https://img.freepik.com/free-photo/pleasant-lookin…ears-casual-white-t-shirt_273609-16959.jpg?w=2000'
                  class=' feed-card-img'
                  alt='...'
                ></img>
                <Card.Title className='ms-3'>Adnan</Card.Title>
              </div>
              <Card.Text className='mt-3 ms-2'>{v}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        {/* </Card> */}
      </Col>
    </Row>
  )}
</>
};

export default ShowFeed;
