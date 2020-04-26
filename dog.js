function Dog (){
	this.stomatch = [];
}
Dog.prototype.eat = function(mouse) {

	this.stomatch.push(mouse);
};