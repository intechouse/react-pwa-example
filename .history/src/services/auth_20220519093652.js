import { signInWithEmailAndPassword } from 'firebase/auth';


export const fireBasemethod = new Promise((resolve, reject)=> {
    console.log("Promise callback");
    resolve();
  }).then(function(result) {
    console.log("Promise callback (.then)");
  }).catch(e=>{});

  export const sendInviation = (formData) =>
  new Promise((resolve, reject) => {
    fetch(API.INVITATION.send, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    })
      .then((response) => response.json())
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