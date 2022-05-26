import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fireBaseSignUp } from '../../services/auth';

import { auth, db } from '../../firebase-config';
import mapAuthCodeToMessage from '../../common/ErrorMessages/errorMessage';

import PageSetting from '../../components/Layout/PageSetting';
import { addDoc, collection, setDoc } from 'firebase/firestore';

const SignUp = () => {
  let navigate = useNavigate();
  const [signUpMessage, setSignUpMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email required'),
      password: Yup.string()
        .required('Password required.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    }),
    onSubmit: async (values) => {
      // Save to database

      fireBaseSignUp(auth, values.name, values.email, values.password)
        .then((response) => {})
        .catch((error) => {
          setSignUpMessage(mapAuthCodeToMessage(error?.code));
          signUpMessage && swal(signUpMessage);
        });
    },
  });
  return (
    <PageSetting pageName='SignUp'>
      <form onSubmit={formik.handleSubmit}>
        <Form.Control
          type='text'
          placeholder='Name'
          onChange={formik.handleChange}
          name='name'
          value={formik.values.name}
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
          value={formik.values.email}
          className='mt-3'
        />

        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red', marginTop: '8px', fontSize: '13px' }}>
            {formik.errors.email}
          </div>
        ) : null}
        <Form.Control
          type='password'
          placeholder='Password'
          onChange={formik.handleChange}
          name='password'
          value={formik.values.password}
          className='mt-3'
        />

        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red', marginTop: '8px', fontSize: '13px' }}>
            {formik.errors.password}
          </div>
        ) : null}

        <Button type='submit' className='mt-3 ps-sm-4 pe-sm-4'>
          Sign Up
        </Button>
      </form>
      <a href='/auth/login' className='d-flex justify-content-end'>
        Sign In
      </a>
    </PageSetting>
  );
};

export default SignUp;
