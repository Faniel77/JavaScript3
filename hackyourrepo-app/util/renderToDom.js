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
        const contributorsArray = contributorsData;
        pagination(contributorsArray);
      });
  });
}
