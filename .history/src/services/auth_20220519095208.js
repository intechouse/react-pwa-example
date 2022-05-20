import { createUserWithEmailAndPassword } from 'firebase/auth';

import { signInWithEmailAndPassword } from 'firebase/auth';


export const fireBaseSignIn = (auth, email, password) =>
  new Promise((resolve, reject) => {
     signInWithEmailAndPassword(auth, email, password) 
      .then((data) => {
          resolve(data)}
      )
      .catch((e) => {
        reject(e);
      });
  });

  export const fireBaseSignUp = (auth, email, password) =>
  new Promise((resolve, reject) => {
     signInWithEmailAndPassword(auth, email, password) 
      .then((data) => {
          resolve(data)}
      )
      .catch((e) => {
        reject(e);
      });
  });