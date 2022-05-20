import React from 'react'

const signInWithEmailAndPassword = (authentication) =>
// signInWithEmailAndPassword(authentication, values.email, values.password)
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