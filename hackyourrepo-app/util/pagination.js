function pagination(listItem) {
  const paginationElement = document.getElementById('pagination');
  let currentPage = 1;
  const rows = 5;

  // show contributors
  function displayList(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = '';
    page--;
    const start = rowsPerPage * page;
    const end = start + rowsPerPage;
    const paginatedItem = items.slice(start, end);
    for (let i = 0; i < paginatedItem.length; i++) {
      const item = paginatedItem[i];
      const itemElement = document.createElement('div');
      itemElement.className = 'eachContributor';
      const image = document.createElement('img');
      image.src = item.avatar_url;
      image.className = 'contributorImage';
      image.style.width = '50px';
      const loginDetails = document.createElement('a');
      loginDetails.id = 'loginDetails';
      loginDetails.href = item.html_url;
      loginDetails.textContent = item.login;
      const contributions = document.createElement('div');
      contributions.id = 'contributions';
      contributions.textContent = item.contributions;
      itemElement.appendChild(image);
      itemElement.appendChild(loginDetails);
      itemElement.appendChild(contributions);
      wrapper.appendChild(itemElement);
    }
  }
  // make buttons
  function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = '';
    const pageCount = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i < pageCount + 1; i++) {
      const btn = paginationButton(i); // add as much as button which we need
      wrapper.appendChild(btn);
    }
  }

  function paginationButton(page, items) {
    const button = document.createElement('button');
    button.innerText = page;
    if (currentPage == page) button.classList.add('active');

    button.addEventListener('click', () => {
      currentPage = page;
      displayList(listItem, cardContainer, rows, currentPage);
      const currentButton = document.querySelector(
        '.pageNumbers button.active',
      );
      currentButton.classList.remove('active');
      button.classList.add('active');
    });
    return button;
  }

  displayList(listItem, cardContainer, rows, currentPage);
  setupPagination(listItem, paginationElement, rows);
}
