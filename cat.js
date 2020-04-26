function Cat (name){
	this.name = name
}
Cat.prototype.sleep = function(){
	console.log ('zzzzzzzz')
}
 module.exports = Cat;