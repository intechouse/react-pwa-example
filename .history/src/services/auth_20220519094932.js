import { signInWithEmailAndPassword } from 'firebase/auth';




  export const fireBaseSignIn = (auth, email, password) =>
  new Promise((resolve, reject) => {
    console.log('vjkdn',auth, email, password);
     signInWithEmailAndPassword(auth, email, password) 
      .then((data) => {
          resolve(data)}
      )
      .catch((e) => {
        reject(e);
      });
  });