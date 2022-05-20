import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PageSetting from '../Layout/PageSetting';
import { Form, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import swal from 'sweetalert';
import { fireBaseSignIn } from '../../services/auth';

import { auth } from '../../firebase-config';
import mapAuthCodeToMessage from '../../common/ErrorMessages/errorMessage';

const SignIn = () => {
  let navigate = useNavigate();
  const [signinMessage, setSigninpMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    }),
    onSubmit: async (values) => {
      fireBaseSignIn(auth, values.email, values.password)
        .then((response) => {
          console.log('SignIn Success: ', response);
          navigate('/', { replace: true });
          sessionStorage.setItem(
            'Auth Token',
            response._tokenResponse.refreshToken
          );
          console.log('111dsfdfgfhg--->', response);
        })
        .catch((error) => {
          console.log('SignIn Error: ', error);
          setSigninpMessage(mapAuthCodeToMessage(error?.code));
          signinMessage && swal(signinMessage);
          console.log('in catch');
        });
    },
  });
  return (
    <PageSetting pageName='SignIn'>
      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        /> */}
        <Form.Control
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          name='email'
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red', marginTop: '8px', fontSize: '13px' }}>
            {formik.errors.email}
          </div>
        ) : null}

        {/* <label htmlFor="password">password Address</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        /> */}
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
        {/* {signinMessage && (
          <div style={{ color: 'red', marginTop: '8px', fontSize: '13px' }}>
            {signinMessage}
          </div>
        )} */}

        <Button type='submit' className='mt-3'>
          Submit
        </Button>
      </form>
    </PageSetting>
  );
};

export default SignIn;
