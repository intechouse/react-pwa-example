import React, { useState } from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updatePassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase-config';
import { MainLayout } from '../../components/Layout';

const Password = () => {
  const user = auth.currentUser;
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Password required.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

      confirmPassword: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      updatePassword(user, values.password)
        .then((s) => {
          console.log(s);
          setLoading(false);
          navigate('/', { replace: true });
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    },
  });
  return (
    <MainLayout>
      <Row className='d-flex justify-content-center '>
        <Col className='mt-5 ' sm={11} xs={11} md={10} lg={6}>
          <Card className='mt-5'>
            <Card.Body>
              <Card.Title>Change password</Card.Title>
              <form onSubmit={formik.handleSubmit}>
                <Row className='d-flex justify-content-center'>
                  <Col sm={8} xs={10} className=''>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      onChange={formik.handleChange}
                      name='password'
                      value={formik.values.password}
                      className='mt-3'
                      disabled={loading}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div
                        style={{
                          color: 'red',
                          marginTop: '8px',
                          fontSize: '13px',
                        }}
                      >
                        {formik.errors.password}
                      </div>
                    ) : null}
                    <Form.Control
                      type='password'
                      placeholder='Confirm Password'
                      onChange={formik.handleChange}
                      name='confirmPassword'
                      value={formik.values.confirmPassword}
                      className='mt-3'
                      disabled={loading}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div
                        style={{
                          color: 'red',
                          marginTop: '8px',
                          fontSize: '13px',
                        }}
                      >
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Col className='mt-5'>
                  <Button type='submit' disabled={loading}>
                    Update Password
                    {loading && (
                      <div
                        class='spinner-border spinner-border-sm ms-2'
                        role='status'
                      >
                        <span class='visually-hidden'>Loading...</span>
                      </div>
                    )}
                  </Button>
                </Col>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Password;
