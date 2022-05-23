import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const ShowFeed = ({ feedList }) => {
  return (
    <Row>
      <Col className='h-50 overflow-auto'>
        {/* <Card> */}
        {feedList.map((v, i) => (
          <Card className='mt-3' key={i + 1}>
            <Card.Body>{v}</Card.Body>
          </Card>
        ))}
        {/* </Card> */}
      </Col>
    </Row>
  );
};

export default ShowFeed;
