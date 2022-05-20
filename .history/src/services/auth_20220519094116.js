import { signInWithEmailAndPassword } from 'firebase/auth';




  export const fireBaseSignIn = (auth, email, password) =>
  new Promise((resolve, reject) => {
    
     signInWithEmailAndPassword(auth, email, password) .then((response) => response.json())
      .then((data) => {
        
          resolve(data);}
      )
      .catch((e) => {
        reject(e);
      });
  });