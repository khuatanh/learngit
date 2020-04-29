var chalk = require ('chalk');
function Dog (){
	this.stomatch = [];
}
Dog.prototype.eat = function(mouse) {

	this.stomatch.push(mouse);
	console.log('Hi I am full. I have just eaten:' + chalk.blue(this.stomatch));
};
module.exports = Dog;