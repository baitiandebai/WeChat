function Animal(){
	this.species = "动物";
}

function Cat(name,color){
	//Animal.apply(this,arguments);
	this.name = name;
	this.color = color;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.type="猫科动物";
Cat.prototype.eat = function(){
	console.log(this.name + "猫在吃饭!");
}

var cat1 = new Cat("大毛","白色");
var cat2 = new Cat("二毛","灰色");
console.log(cat1.name);
cat1.eat();
console.log(cat1.species);

var DB = require('./generator_db');
var co = require('co');
var db = new DB();
var data = {"username":"lixun","password":"1234"};
db.read(data);
var Yield = require("./yield.js");
var ld = new Yield();
co(ld.read);
// co(db.read(data)).then(function(){
// 	console.log("Generator 函数执行完毕!");
// });
// db.insert(data);