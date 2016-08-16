var mongodb = require('mongodb');

var server = new mongodb.Server("localhost",27017,{safe:true});
var db = new mongodb.Db('db_1',server);
db.open(function(error,db){
	if(error) throw error;
	console.log("We are connected.");
	db.collection("user",function(error,collection){
		collection.find(function(error,cursor){
			cursor.each(function(error,doc){
				if(doc){
					console.log("name:" + doc.name + 
						" age:" + doc.age + " tel:" + doc.tel);
				}
			});
		});
	});
	db.collection("user",function(error,collection){
		
		collection.insert(data,{safe:true},function(error,result){
			console.log(result);
		});
	});
});
exports.save = function(data){
	
}