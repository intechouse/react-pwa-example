import { signInWithEmailAndPassword } from 'firebase/auth';


const promise = new Promise(function(resolve, reject) {
    console.log("Promise callback");
    resolve();
  }).then(function(result) {
    console.log("Promise callback (.then)");
  });