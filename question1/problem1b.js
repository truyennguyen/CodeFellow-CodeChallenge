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
  _.forEach(people, function(people)
  {
    if(people.occupation === "programmer")
    {
      totalPeople++;
      sum = sum + people.awesome_index;
    }
  });
  $("#awesome-index").html(sum/totalPeople);
}

calAwesomeAvgIndex(people);