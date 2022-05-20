import { signInWithEmailAndPassword } from 'firebase/auth';




  export const fireBaseSignIn = (auth, email, password) =>
  new Promise((resolve, reject) => {
    console.log('vjkdn',auth, email, password);
     signInWithEmailAndPassword(auth, email, password) .then((response) => response.json())
      .then((data) => {
        console.log('');
          resolve(data)}
      )
      .catch((e) => {
          console.log('errr');
        reject(e);
      });
  });