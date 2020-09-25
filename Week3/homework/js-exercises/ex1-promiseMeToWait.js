'use strict';

// Exercise A

async function getData(url) {
  try {
    const getResponse = await fetch(url);
    const jsonData = await getResponse.json(getResponse);
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
}
getData('https://randomfox.ca/floof/');

// Exercise B

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

function thatReturnsAPromise(array) {
  return new Promise((resolve, reject) => {
    const capsArray = array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      }
      reject('Error: Not all items in the array are strings!');
    });
    resolve(capsArray);
  });
}
async function makeAllCaps(array) {
  try {
    const thePromise = await thatReturnsAPromise(array);
    console.log(thePromise);
  } catch (error) {
    console.log(error);
  }
}
makeAllCaps(arrayOfWords);
