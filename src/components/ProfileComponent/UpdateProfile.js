import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  addDoc,
  doc,
  collection,
  updateDoc,
  update,
  query,
  where,
  getDocs,
  getDoc,
} from 'firebase/firestore';

import { db, auth } from '../../firebase-config';
import { updateProfile } from 'firebase/auth';

const UpdateProfile = ({ user }) => {
  // console.log('auth.currentuser', auth.currentUser);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name required'),
    }),
    onSubmit: async (values) => {
      if (user) {
        updateProfile(auth.currentUser, {
          displayName: values.name,
        });

        let docId = '';
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        // querySnapshot.update('name', 'adnan1');
        querySnapshot.forEach((docx) => {
          console.log('doc id', docx.id);
        });
      }
    },
  });
  return (
    <Card className='mt-3'>
      <Card.Body>
        <form onSubmit={formik.handleSubmit}>
          <Form.Control
            type='text'
            placeholder='Name'
            onChange={formik.handleChange}
            name='name'
            value={formik.values.name}

            // value={user?.displayName}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red', marginTop: '8px', fontSize: '13px' }}>
              {formik.errors.name}
            </div>
          ) : null}
          <Form.Control
            type='email'
            placeholder='Email'
            onChange={formik.handleChange}
            name='email'
            value={user?.email}
            className='mt-3'
            disabled
          />

          <Button type='submit' className='mt-3 ps-sm-4 pe-sm-4'>
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

UpdateProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

UpdateProfile.defaultProps = {
  user: undefined,
};

export default UpdateProfile;
