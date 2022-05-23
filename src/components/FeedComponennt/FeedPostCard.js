import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '../../firebase-config';

const FeedPostCard = () => {
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
    addDoc(collection(db, 'feed'), {
      feed: values.feed,
      uid: userId.split` `[0],
      name: userId.split` `[1],
      email: userId.split` `[2],
    })
      .then((data) => {})
      .catch((e) => console.log('error'));
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
            />
          </Card.Text>
          <Button type='submit' variant='primary'>
            POST
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default FeedPostCard;
