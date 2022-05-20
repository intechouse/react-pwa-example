import React from 'react';

const mapAuthCodeToMessage = (authCode) => {
  console.log('mapAuthCodeToMessage in ', authCode);
  switch (authCode) {
    case 'auth/wrong-password':
      return 'Password provided is not corrected';

    case 'auth/wrong-email':
      return 'Email provided is invalid';
    case 'auth/email-already-exists':
      return 'Email already exists';
    case 'auth/too-many-requests':
      return 'Too many requests';
    case 'auth/user-not-found':
      return 'User not found';

    case 'auth/email-already-in-use':
      return 'Email already in use.';

    case 'auth/invalid-email':
      return 'Email already in use.';
    // Many more authCode mapping here...

    default:
      return '';
  }
};
export default mapAuthCodeToMessage;
