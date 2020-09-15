'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

function main() {
  // Header section
  const header = document.createElement('header');
  header.id = 'header';
  const firstParagraph = document.createElement('p');
  const selectBox = document.createElement('select');
  selectBox.id = 'dropDown';
  header.appendChild(firstParagraph);
  header.appendChild(selectBox);
  document.body.appendChild(header);

  // THE MAIN CONTAINER
  const repoContainer = document.createElement('div');
  repoContainer.id = 'container';
  repoContainer.style.display = 'flex';
  repoContainer.style.flexDirection = 'row';

  // REPOSITORY SECTION
  const repoSection = document.createElement('section');
  repoSection.id = 'repoSection';
  repoSection.style.width = '50%';
  const card = document.createElement('div');
  card.id = 'firstSectionCard';
  card.classList = 'cards';
  const firstSectionTable = document.createElement('table');
  firstSectionTable.id = 'firstSectionTable';

  // first row in the table
  const firstRow = document.createElement('tr');
  firstRow.id = 'firstRow';
  const firstRowTitle = document.createElement('td');
  firstRowTitle.id = 'firstRowTitle';
  firstRowTitle.textContent = 'Repository: ';
  const firstRowLink = document.createElement('td');
  const firstRowLinkContent = document.createElement('a');
  firstRowLinkContent.id = 'firstRowLinkContent';
  firstRowLink.appendChild(firstRowLinkContent);
  firstRow.appendChild(firstRowTitle);
  firstRow.appendChild(firstRowLink);
  firstSectionTable.appendChild(firstRow);

  // second row in the table
  const secondRow = document.createElement('tr');
  secondRow.id = 'secondRow';
  const secondRowTitle = document.createElement('td');
  secondRowTitle.innerText = 'Description: ';
  const secondRowContent = document.createElement('td');
  secondRowContent.id = 'secondRowContent';
  secondRow.appendChild(secondRowTitle);
  secondRow.appendChild(secondRowContent);
  firstSectionTable.appendChild(secondRow);
  // third row in the table
  const thirdRow = document.createElement('tr');
  const thirdRowFork = document.createElement('td');
  thirdRowFork.innerText = 'Forks: ';
  const thirdRowForkNumber = document.createElement('td');
  thirdRowForkNumber.id = 'thirdRowForkNumber';
  thirdRow.appendChild(thirdRowFork);
  thirdRow.appendChild(thirdRowForkNumber);
  firstSectionTable.appendChild(thirdRow);

  // Fourth row in the table
  const fourthRow = document.createElement('tr');
  const fourthRowTitle = document.createElement('td');
  fourthRowTitle.innerText = 'Updated: ';
  const fourthRowUpdatedTime = document.createElement('td');
  fourthRowUpdatedTime.id = 'fourthRowUpdatedTime';
  fourthRow.appendChild(fourthRowTitle);
  fourthRow.appendChild(fourthRowUpdatedTime);
  firstSectionTable.appendChild(fourthRow);

  card.appendChild(firstSectionTable);
  repoSection.appendChild(card);
  repoContainer.appendChild(repoSection);
  document.body.appendChild(repoContainer);

  // THE CONTRIBUTORS SECTION
  const contributorsSection = document.createElement('section');
  contributorsSection.id = 'contributorsSection';
  contributorsSection.style.width = '50%';
  const contributorsTitle = document.createElement('p');
  contributorsTitle.id = 'contributorsTitle';
  contributorsTitle.textContent = 'Contributors';
  contributorsSection.appendChild(contributorsTitle);
  repoContainer.appendChild(contributorsSection);

  // LETS FETCH DATA

  // the first fetch will retrieve the data for all the hack your future repositories
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  function fetchGitHub() {
    fetch(url)
      .then(response => {
        console.log('we got the body');
        return response.json();
      })
      .then(jsonData => {
        console.log('we got the JsonData');
        console.log(jsonData);
        renderRepositoryToDOM(jsonData);
      });
  }
  fetchGitHub();

  // this function will render the data in to the DOM
  function renderRepositoryToDOM(jsonData) {
    const results = jsonData.map(data => {
      const options = document.createElement('option');
      options.innerText = data.name;
      options.value = data.url;

      selectBox.appendChild(options);
    });
    selectBox.addEventListener('change', function() {
      fetch(selectBox.value) // this will provide the url related to every option inside the select box
        .then(res => {
          console.log('new json for each repository');
          return res.json();
        })
        .then(newData => {
          // console.log(newData);
          firstRowLinkContent.textContent = newData.name;
          firstRowLinkContent.href = newData.html_url;
          secondRowContent.textContent = newData.description;
          thirdRowForkNumber.textContent = newData.forks;
          fourthRowUpdatedTime.textContent = newData.updated_at;
          return fetch(newData.contributors_url);
        })
        .then(newResponse => {
          return newResponse.json();
        })
        .then(contributorsData => {
          console.log(contributorsData);
          clear();
          const forEveryContributor = contributorsData.map(elementData => {
            const cardContainer = document.createElement('div');
            cardContainer.id = 'cardContainer';
            cardContainer.classList = 'cards';
            const image = document.createElement('img');
            image.src = elementData.avatar_url;
            image.style.width = '50px';
            const loginDetails = document.createElement('a');
            loginDetails.id = 'loginDetails';
            loginDetails.href = elementData.html_url;
            loginDetails.textContent = elementData.login;
            const contributions = document.createElement('div');
            contributions.id = 'contributions';
            contributions.textContent = elementData.contributions;
            cardContainer.appendChild(image);
            cardContainer.appendChild(loginDetails);
            cardContainer.appendChild(contributions);
            contributorsSection.appendChild(cardContainer);
          });
        });
    });
    // this will stop elements from appending after every click
    function clear() {
      contributorsSection.innerHTML = '';
    }
  }
}
window.addEventListener('load', main);
