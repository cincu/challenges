export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map ((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map ((person) => `${person.lastName} (${person.age})`)
}

export function getPeopleByAge(people, age) {
  return people.filter ((person) =>  person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age)
    .map((person) => `${person.firstName} ${person.lastName}`);
}

export function getPeopleByLastName(people, lastName) {
  return people
    .filter((person) => person.lastName === lastName)
    .map((person) => person.lastName);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id ===id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age>age);
}

export function getFullNamesSortedByAge(people) {
  return people
  .sort((a,b) => {
    if (a.age>b.age) {
      return 1;
    } if (a.age<b.age) {
      return -1;
    } else {
      return 0;
    
}})
  .map((result) => `${result.firstName} ${result.lastName}`)
}
