var mongodb = require('mongodb');


function Con(){
	this.getCon = function(){
		var server = new mongodb.Server("localhost",27017,{safe:true});
		var db = new mongodb.Db('db_2',server);
		return db;
	}
}
module.exports = function(){

	this.read = function* (data){
		var con = new Con();
	    var db = con.getCon();

    	var db1 = yield db.open();
	    console.log(db1 + "db1的值是");
	    var cotion = yield db1.collection("user");
	    console.log(conllection + "这个的值是");
	    var doc = yield cotion.find(data).toArray();
	    console.log(doc);
	   

		// db.open(function(error,db){
		// 	if(error) throw error;
		// 	console.log("We are connected.");
		// 	db.collection("user",function(error,collection){
		// 		collection.find(data,function(error,cursor){
		// 			cursor.each(function(error,doc){
		// 				if(doc){
		// 					console.log(doc);
		// 				}
		// 			});
		// 		});
		// 	});
		// });
		console.log("结束了");
	}
}
