import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
const PageSetting = ({ children,pageName }) => {
  return (
    <>
      <Container className="p-5 " fluid style={{height: '100vh',backgroundColor:'#808279'}}>
        <Row>
          <Col sm={8} xs={8}></Col>
          <Col sm={4} xs={12}>
            <Card className="mt-5 p-3" style={{height:'80vh'}}>
              <Card.Title>
                <h1>{pageName}</h1>
              </Card.Title>
              <Card.Body>{children}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageSetting;
