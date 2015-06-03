var library = require ('./people.js');

var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

console.log(library.removeBadPeople(people));
// => [{name:'A', age: 20}, {name:'B', age: 30}];

console.log(library.sumAgesValid(people));
// => 50

console.log(library.sumAgesAll(people));
// => 60
