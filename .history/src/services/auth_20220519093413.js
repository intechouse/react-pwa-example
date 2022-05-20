import { signInWithEmailAndPassword } from 'firebase/auth';


export const firemethod = new Promise((resolve, reject)=> {
    console.log("Promise callback");
    resolve();
  }).then(function(result) {
    console.log("Promise callback (.then)");
  }).catch(e=>{});