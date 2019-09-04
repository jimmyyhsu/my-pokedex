var $pokemonList = document.querySelector('ul');

var pokemonRepository = (function(){
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Function to add new Pokemon data
  function add(pokemon){
    //Must be an 'object' type
    if (typeof pokemon !== 'object'){
      return 'Not a valid input'
    }else{
    repository.push(pokemon);
    }
  }

  //Function to pull all Pokemon data
  function getAll(){
    return repository;
  }

  function addListItem(pokemon){
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('new-style');
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem)
    button.addEventListener('click', function (){
      showDetails(pokemon)
    })
  }

  function showDetails(pokemon){
    console.log(pokemon)
  }

  function loadList(){
    return fetch(apiUrl).then(function(response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function(item){
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add (pokemon);
      });
    }).catch(function(e){
      console.error(e);
    })
  }

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

//Creates list of Pokemon with Pokemon's name on the button
pokemonRepository.getAll().forEach(function(currentItem){
  pokemonRepository.addListItem(currentItem);
})
