'use strict';

function main() {
  const allPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  function fetchKantoPokemon() {
    fetch(allPokemonUrl)
      .then(response => response.json())
      .then(function(allpokemon) {
        allpokemon.results.forEach(function(pokemon) {
          fetchPokemonData(pokemon);
        });
      });
  }
  fetchKantoPokemon();

  function fetchPokemonData(pokemon) {
    const { url } = pokemon;
    fetch(url)
      .then(response => response.json())
      .then(function(pokeData) {
        addPokemonToDOM(pokeData);
      });
  }
  // function addPokemonToDOM(pokeData) {
  const container = document.createElement('div');
  container.className = 'topContainer';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.width = '30%';
  container.style.margin = '0 auto';
  document.body.appendChild(container);
  const button = document.createElement('button');
  button.id = 'btn';
  button.innerText = 'Get Pokemon!';
  container.appendChild(button);

  // what happens when u click the button

  const select = document.createElement('select');
  select.id = 'select';
  select.style.cursor = 'pointer';
  select.style.display = 'none';
  container.appendChild(select);
  button.addEventListener('click', function() {
    select.style.display = 'block';
  });
  const image = document.createElement('img');
  image.style.display = 'flex';
  image.style.width = '20%';
  image.style.margin = '0 auto';
  function addPokemonToDOM(pokeData) {
    const option = document.createElement('option');
    option.innerText = pokeData.name;
    option.value = pokeData.sprites.front_default;
    option.style.cursor = 'pointer';
    select.appendChild(option);
  }
  select.addEventListener('change', function() {
    console.log(select.value);
    image.src = select.value;
    document.body.appendChild(image);
  });
}
window.addEventListener('load', main);
