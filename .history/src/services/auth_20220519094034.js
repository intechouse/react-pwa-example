import { signInWithEmailAndPassword } from 'firebase/auth';




  export const fireBaseSignIn = (auth, email, password) =>
  new Promise((resolve, reject) => {
    
     signInWithEmailAndPassword(auth, email, password) .then((response) => response.json())
      .then((data) => {
        if (data.status === 200 || data.success) {
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });