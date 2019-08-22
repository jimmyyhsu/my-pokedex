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
  },
];

for (items in repository) {
  if (repository[items].height > 1) {
    document.write(repository[items].name + " (height: " + repository[items].height + "m) - Wow, that's big!<br><br>");
  } else {
    document.write(repository[items].name + ' (height: ' + repository[items].height + 'm)<br><br>');
  }
}
