import React from 'react'

// const SignInWithEmailAndPassword = (authentication, email,password) =>
const 
signInWithEmailAndPassword(authentication, email, password)
.then((response) => {
  navigate('/', { replace: true });
  sessionStorage.setItem(
    'Auth Token',
    response._tokenResponse.refreshToken
  );
  console.log('111dsfdfgfhg--->', response);
})
.catch((error) => {
  setSigninpMessage(mapAuthCodeToMessage(error?.code));
  console.log('in catch');
});

export default SignInWithEmailAndPassword;