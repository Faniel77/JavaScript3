'use strict';

const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');
button.addEventListener('click', programmerHumor);
button2.addEventListener('click', newProgrammerHumor);

// this will make XHR request
function programmerHumor() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://xkcd.now.sh/?comic=latest', true);
  xhr.onload = function() {
    if (this.status == 200) {
      const user = JSON.parse(this.responseText);
      console.log(user);
      let output = '';
      output += `<img src = "${user.img}" width = "150" height ="150">`;
      document.getElementById('id').innerHTML = output;
    }
  }; // error handling
  xhr.onerror = function() {
    console.log('Request Error');
  };
  xhr.send();
}
// axios request
function newProgrammerHumor() {
  axios('https://xkcd.now.sh/?comic=latest')
    .then(res => renderOutput(res))
    .catch(err => console.error(err));
}
// this will display the image in the DOM
function renderOutput(res) {
  document.getElementById(
    'box',
  ).innerHTML = `<img src = "${res.data.img}" width = "150" height ="150">`;
}
