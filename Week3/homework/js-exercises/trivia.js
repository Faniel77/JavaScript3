'use strict';

function main() {
  const container = document.querySelector('.container');

  async function fetchData() {
    const url = 'https://opentdb.com/api.php?amount=5';
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData.results);
      renderToDom(jsonData);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();

  function renderToDom(jsonData) {
    const resultsArr = jsonData.results;
    resultsArr.forEach(element => {
      console.log(element.question);
      const questionDiv = document.createElement('div');
      questionDiv.className = 'questionDiv';
      questionDiv.textContent = decodeHtml(element.question);
      container.appendChild(questionDiv);
      let isClicked = false;
      questionDiv.addEventListener('click', () => {
        isClicked = !isClicked;
        if (isClicked) {
          const displayAnswer = document.createElement('p');
          displayAnswer.innerText = decodeHtml(element.correct_answer);
          questionDiv.appendChild(displayAnswer);
        } else {
          questionDiv.textContent = decodeHtml(element.question);
        }
      });
    });
  }

  // This function will do the HTML escaping (source: stack overflow)
  function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
}
window.onload = main();
