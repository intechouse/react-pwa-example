import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fireBaseSignUn } from '../../services/auth';


import { auth } from '../../firebase-config';
import mapAuthCodeToMessage from '../../common/ErrorMessages/errorMessage';

import PageSetting from '../Layout/PageSetting';

const SignUp = () => {
  let navigate = useNavigate();
  const [signUpMessage, setSignUpMessage] = useState('');

  signUpMessage && swal(signUpMessage);
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
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((response) => {
          navigate('/login', { replace: true });
          sessionStorage.setItem(
            'Auth Token',
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          setSignUpMessage(mapAuthCodeToMessage(error?.code));
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
        {/* {signUpMessage && (
          <div style={{ color: 'red', marginTop: '8px', fontSize: '13px' }}>
            {signUpMessage}
          </div>
        )} */}
        <Button type='submit' className='mt-3'>
          Submit
        </Button>
      </form>
    </PageSetting>
  );
};

export default SignUp;
