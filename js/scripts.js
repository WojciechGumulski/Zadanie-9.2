var men = ['Adam', 'Piotr', 'Łukasz', 'Cezary', 'Wiktor', 'Antoni'],
	female = ['Anna', 'Paulina', 'Ela', 'Sara', 'Maria', 'Ewa'];
var allNames = men.concat(female);
console.log(allNames);

var newName = 'Karolina';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

console.log(allNames);