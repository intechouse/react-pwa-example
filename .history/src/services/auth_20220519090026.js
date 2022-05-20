let signInWithEmailAndPassword = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    signInWithEmailAndPassword.then(
      function(response) { /* code if successful */ 
      navigate('/', { replace: true });
      sessionStorage.setItem(
        'Auth Token',
        response._tokenResponse.refreshToken
      );},
      function(error) { /* code if some error */ 
    mapAuthCodeToMessage(error?.code);
     }
    );