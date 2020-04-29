var Dog = require ('./Dog');
var Mouse = require ('./Mouse');
var Cat = require ('./Cat')
var mouse1 = new Mouse ('jery');
var cat = new Cat();
var dog = new Dog ();

try {
	cat.eat(mouse1);
}
catch (error) {
	console.log('cat can eat mouse only!');
}
