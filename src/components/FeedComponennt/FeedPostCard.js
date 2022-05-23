import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '../../firebase-config';

const FeedPostCard = () => {
  const [reload, setReload] = useState(true);
  const validationSchema = Yup.object({
    feed: Yup.string().required('Required'),
  });

  const initialValues = {
    feed: '',
  };

  const onSubmit = (values) => {
    console.log('fff');
    addDoc(collection(db, 'feed'), {
      feed: values.feed,
    })
      .then((data) => {
        
      })
      .catch((e) => console.log('error'));
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
