
         let name = 'Paul'

         if (name === 'Paul') {
            resolve("Promise resolved successfully");
         }
         else {
            reject(Error("Promise rejected"));
         }
      });

      let obj = {newName: ''};

      promise.then( result => {
         obj["newName"] = result
      }, function(error) {
         obj["newName"] = error
      });
