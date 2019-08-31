var $pokemonList = document.querySelector('ul');

var pokemonRepository = (function(){
  var repository = [
    {
      name: 'Bulbasaur',
      index: 1,
      height: 0.7,
      weight: 6.9,
      types: ['grass','poison']
    },
    {
      name: 'Ivysaur',
      index: 2,
      height: 1.0,
      weight: 13.0,
      types: ['grass','poison']
    },
    {
      name: 'Venusaur',
      index: 3,
      height: 2.0,
      weight: 100.0,
      types: ['grass','poison']
    }
  ];

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
