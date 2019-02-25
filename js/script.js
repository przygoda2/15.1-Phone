'use strict';
function Phone(brand, price, color, screen, weight) {
	this.brand = brand;
	this.price = price;
    this.color = color;
    this.screen = screen;
    this.weight = weight;

}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "6'", "149");
var nokia = new Phone("Nokia", 1800, "black", "7'", "147" );
var sony = new Phone("Sony", 2100, "black", "4,5'", "140");

iPhone6S.printInfo();
nokia.printInfo();
sony.printInfo();