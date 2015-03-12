var people = [
  {
    name: 'Bob',
    occupation: 'programmer',
    awesome_index: 34,
  },
  {
    name: 'Alice',
    occupation: 'programmer',
    awesome_index: 26,
  },
  {
    name: 'Zaphod',
    occupation: 'President of the Galaxy',
    awesome_index: 10
  }
];

function calAwesomeAvgIndex(people)
{
  var sum = 0;
  var totalPeople = 0;
  for(var i = 0; i < people.length; i++)
  {
    if(people[i].occupation === "programmer")
    {
      totalPeople++;
      sum = sum + people[i].awesome_index;
    }
  }
  document.getElementById("awesome-index").innerHTML = sum / totalPeople;
}

calAwesomeAvgIndex(people);