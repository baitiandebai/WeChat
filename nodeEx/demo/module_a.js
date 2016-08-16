exports.name = "lixun";
exports.data ="This is some data";

var privateVariable = 12345;
exports.getPrivate = function(){
	return privateVariable;
}