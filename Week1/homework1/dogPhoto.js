'use strict';

const button = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
button.addEventListener('click', displayDogPhotos);
button2.addEventListener('click', displayNewDogPhotos);

// make XHR Request

function displayDogPhotos() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
  xhr.onload = function() {
    if (this.status == 200) {
      const user = JSON.parse(this.responseText);
      console.log(user); // logs the data
      let output = '';
      output +=
        `${'<li>' + '<img src = "'}${
          user.message
        }" width = "150" height = "150">` + `</li>`;
      document.getElementById('imageEl').innerHTML = output;
    }
  };

  xhr.onerror = function() {
    console.log('Request Error');
  };
  xhr.send();
}

// Axios Request
function displayNewDogPhotos() {
  axios('https://dog.ceo/api/breeds/image/random')
    .then(res => renderOutput(res))
    .catch(err => console.error(err));
}
// this will display the image in the DOM
function renderOutput(res) {
  document.getElementById(
    'imageEl',
  ).innerHTML = `<img src = "${res.data.message}" width = "150" height ="150">`;
}
