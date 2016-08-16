console.log(1);
process.nextTick(function(){
	console.log(3);
});
console.log(2);

var a = require("./module_a");

console.log(a.name);
console.log(a.data);
console.log(a.getPrivate());