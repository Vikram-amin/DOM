
var myPromise = new Promise(function (resolve, reject) {
      resolve("it's  successfull");
    });
    
    // pending;
    // fulfilled;
    // rejected;
    
    myPromise.then(function (res) {
      // what should happen if promise is successfull
      console.log(res);
    });
    
    myPromise.catch(function (err) {
      console.log(err);
    });
    