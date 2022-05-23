import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const ShowFeed = ({ feedList }) => {
  return (
    <>
      {/* {feedList.length > 0 ? ( */}
      <Row>
        <Col className='h-50 overflow-auto'>
          {feedList.map((v, i) => (
            <Card className='mt-3 ' key={i + 1}>
              <Card.Body>
                <div className='feed-card-header'>
                  <img
                    src=' https://img.freepik.com/free-photo/pleasant-lookin…ears-casual-white-t-shirt_273609-16959.jpg?w=2000'
                    className=' feed-card-img'
                    alt='...'
                  ></img>
                  <Card.Title className='ms-3'>{v?.name}</Card.Title>
                </div>
                <Card.Text className='mt-3 ms-2'>{v?.feed}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      {/* ) : ( //{' '}
      <Card className='mt-3 border-0'>
        //{' '}
        <Card.Body>
          //{' '}
          <Card.Text className='mt-3 mb-3 ms-2 '>
            // No Post Available . . . //{' '}
          </Card.Text>
          //{' '}
        </Card.Body>
        //{' '}
      </Card>
       )} */}
    </>
  );
};

export default ShowFeed;
