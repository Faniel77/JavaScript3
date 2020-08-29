'use strict';
const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');

button.addEventListener('click', makeAFriend);
button2.addEventListener('click', makeANewFriend);

function makeAFriend() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.randomuser.me/api', true);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var user = JSON.parse(this.responseText);
      console.log(user);
    }
  };
  xhr.onerror = function() {
    console.log('Request Error');
  };
  xhr.send();
}
function makeANewFriend() {
  axios('https://www.randomuser.me/api')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}
