'use strict';

const getAnonName = function(firstName) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (firstName) {
        resolve(`${firstName}`);
      } else {
        const reason = new Error("You didn't pass in a first name!");
        reject(reason);
      }
    }, 3000);
  });
};
getAnonName('Jhon')
  .then(function(firstName) {
    const fullName = `${firstName} Doe`;
    console.log(fullName);
  })
  .catch(function(error) {
    console.log(error.message);
  });
