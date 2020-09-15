'use strict';

const checkDoubleDigits = function(number) {
  return new Promise(function(resolve, reject) {
    if (number > 10) {
      resolve(`${number}`);
    } else {
      reject(Error(`Error: ${number} is smaller than 10`));
    }
  });
};
checkDoubleDigits(19)
  .then(function(number) {
    console.log(`${number} is bigger than 10`);
  })
  .catch(function(error) {
    console.log(error.message);
  });
