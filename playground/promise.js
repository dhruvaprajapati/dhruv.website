let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('Argument must be numbers');
      }
    }, 1500)
  });
};

asyncAdd('12f',5)
  .then((data) => {
  return asyncAdd(data, 22);
  })
  .then((res) => console.log('SHOULD BE', res))
  .catch((err) => console.log(err))


/*
let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey it worked');
    // reject('Unable to fulfill Promise');
  }, 2500)
});

somePromise
  .then((message) => {
    console.log(`Success Message: ${message}`);
  })
  .catch((err) => {
    console.error(`Error Message: ${err}`);
  });*/
