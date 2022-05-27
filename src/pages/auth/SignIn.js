import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PageSetting from '../../components/Layout/PageSetting';
import { Form, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import swal from 'sweetalert';

import { fireBaseSignIn } from '../../services/auth';
import { auth } from '../../firebase-config';
import mapAuthCodeToMessage from '../../common/ErrorMessages/errorMessage';

const SignIn = () => {
  let navigate = useNavigate();
  const [signinMessage, setSigninpMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      fireBaseSignIn(auth, values.email, values.password)
        .then((response) => {
          navigate('/', { replace: true });
          setLoading(false);
          // localStorage.setItem(
          //   'userCredentials',
          //   `${response.user.uid} ${response.user.displayName} ${response.user.email}`
          // );
          // localStorage.setItem('uid', `${response.user.uid}`);
          // sessionStorage.setItem(
          //   'Auth Token',
          //   response._tokenResponse.refreshToken
          // );
        })
        .catch((error) => {
          setSigninpMessage(mapAuthCodeToMessage(error?.code));
          setLoading(false);
          signinMessage && swal(signinMessage);
        });
    },
  });
  return (
    <PageSetting pageName='SignIn'>
      <form onSubmit={formik.handleSubmit}>
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

        <Button type='submit' className='mt-3 ps-sm-4 pe-sm-4 auth-btn'>
          Sign In
          {loading && (
            <div class='spinner-border spinner-border-sm ms-2' role='status'>
              <span class='visually-hidden'>Loading...</span>
            </div>
          )}
        </Button>
        <a href='/auth/register' className='d-flex justify-content-end'>
          SignUp
        </a>
      </form>
    </PageSetting>
  );
};

export default SignIn;
