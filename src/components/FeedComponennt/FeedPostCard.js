import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';

import { db, auth } from '../../firebase-config';

const FeedPostCard = () => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState();
  const validationSchema = Yup.object({
    feed: Yup.string().required('Required'),
  });

  const initialValues = {
    feed: '',
  };

  useEffect(() => {
    setUserId(localStorage.getItem('userCredentials'));
  }, []);
  const onSubmit = (values, { resetForm }) => {
    setLoading(true);
    addDoc(collection(db, 'feed'), {
      feed: values.feed,
      uid: auth.currentUser.uid,
    })
      .then((data) => {
        setLoading(false);
      })
      .catch((e) => {
        console.log('error');
        setLoading(false);
      });
    resetForm();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <Card>
      <Card.Header as='h5'>Feed</Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit}>
          <Card.Text>
            <Form.Control
              name='feed'
              onChange={handleChange}
              value={values.feed}
              as='textarea'
              rows={3}
              required
            />
          </Card.Text>
          <Button type='submit' variant='primary' className='auth-btn'>
            POST
            {loading && (
              <div class='spinner-border spinner-border-sm ms-2' role='status'>
                <span class='visually-hidden'>Loading...</span>
              </div>
            )}
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default FeedPostCard;
