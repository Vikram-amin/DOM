let passExam = false;

let parentPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (passExam) {
      resolve("Bike");
    } else {
      reject("Nothing");
    }
  }, 2000);
});

parentPromise.then(function (res) {
  console.log(res);
});

parentPromise.catch(function (err) {
  console.log(err);
});
