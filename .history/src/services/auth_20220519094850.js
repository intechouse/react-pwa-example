import { signInWithEmailAndPassword } from 'firebase/auth';




  export const fireBaseSignIn = (auth, email, password) =>
  new Promise((resolve, reject) => {
    console.log('vjkdn',auth, email, password);
     signInWithEmailAndPassword(auth, email, password) .
      .then((data) => {
        console.log('data',data);
          resolve(data)}
      )
      .catch((e) => {
          console.log('errr');
        reject(e);
      });
  });