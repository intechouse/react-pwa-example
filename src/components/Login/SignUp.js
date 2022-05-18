import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase-config';
import { Form, Button } from 'react-bootstrap';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import PageSetting from '../Layout/PageSetting';

const SignUp = () => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email required'),
      password: Yup.string()
        .required('Password required.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    }),
    onSubmit: async (values) => {
      const authentication = getAuth();
      createUserWithEmailAndPassword(
        authentication,
        values.email,
        values.password
      )
        .then((response) => {
          navigate('/login', { replace: true });
          sessionStorage.setItem(
            'Auth Token',
            response._tokenResponse.refreshToken
          );
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <PageSetting pageName='SignUp'>
      <form onSubmit={formik.handleSubmit}>
        <Form.Control
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          name='email'
          value={formik.values.email}
        />
        {/* <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      /> */}
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
        {/* <label htmlFor="password">password Address</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        /> */}
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red', marginTop: '8px', fontSize: '13px' }}>
            {formik.errors.password}
          </div>
        ) : null}

        <Button type='submit' className='mt-3'>
          Submit
        </Button>
      </form>
    </PageSetting>
  );
};

export default SignUp;
