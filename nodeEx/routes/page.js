var DB = require("./db");

module.exports = function(){

	this.check = function(username,password,callback){
		var data = {"username":username,"password":password};
		console.log(data);
		var db = new DB();
		db.read(data,function(result){
			callback(result);
		});
	}



}