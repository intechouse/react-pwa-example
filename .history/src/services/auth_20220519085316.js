let signInWithEmailAndPassword = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    signInWithEmailAndPassword.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );