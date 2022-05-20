import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const fireBaseSignUp = (auth, name, email, password) =>
  new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log('Auth, Current User: ', auth.currentUser);
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          resolve(data);
        } else {
          reject('Error');
        }
      })
      .catch((e) => {
        reject(e);
      });
  });

export const fireBaseSignIn = (auth, email, password) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
