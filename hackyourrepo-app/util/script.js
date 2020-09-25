'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

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

// new addition to contributor

const cardContainer = document.createElement('div');
cardContainer.id = 'cardContainer';
cardContainer.classList = 'cards';
contributorsSection.appendChild(contributorsTitle);
contributorsSection.appendChild(cardContainer);
repoContainer.appendChild(contributorsSection);

// Pagination
const pageNoDiv = document.createElement('div');
pageNoDiv.className = 'pageNumbers';
pageNoDiv.id = 'pagination';
document.body.appendChild(pageNoDiv);

// MAIN FUNCTION

function main() {
  fetchGitHub();
}
window.addEventListener('load', main);
