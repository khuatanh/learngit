var Mouse = require ('./Mouse');
function Cat (){
	// this.name = name,
	this.stomach = [];
}
Cat.prototype.eat = function(animal){
	if (animal instanceof Mouse){
		this.stomach.push(animal);
	}else{
		throw new Error ('Cat can eat Mouse only!');
	}

}
 module.exports = Cat;