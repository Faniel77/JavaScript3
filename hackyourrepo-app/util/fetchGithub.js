function fetchGitHub() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
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
