var mongodb = require('mongodb');


function Con(){
	this.getCon = function(){
		var server = new mongodb.Server("localhost",27017,{safe:true});
		var db = new mongodb.Db('db_2',server);
		return db;
	}
}
module.exports = function(){

	this.read = function(data){
		var con = new Con();
	    var db = con.getCon();
	    db.open().then(db =>{return db.collection("user")},error =>console.log("db打开出错了!!"))
	    .then(
	    	collection => {
	    	console.log("我的天啊");
	    	return collection.find(data).toArray();
	    },function(error){
	    	console.log("collection有问题");
	    })
	    .then(function(doc){
	    	var ss = JSON.stringify(doc);
	    	console.log("还是有数据的：" + doc[0].username);
	    	returndoc = doc;
	    	return doc;
	    },function(error){
	    	console.log("没有数据" + error);
	    });


	    // try{
	    // 	var db1 = yield db.open();
		   //  console.log(db1 + "db1的值是");
		   //  var cotion = yield db1.collection("user");
		   //  console.log(conllection + "这个的值是");
		   //  var doc = yield cotion.find(data).toArray();
		   //  console.log(doc);
	    // }catch(e){
	    // 	console.log(e);
	    // }
	    

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

	this.insert = function(data){
		var con = new Con();
	    var db = con.getCon();
		db.open(function(error,db){
			if(error) throw error;
			console.log("We are connected.");
			db.collection("user",function(error,collection){
				// var data = {"name":"libai","age":1234,"tel":"123456677"};
				collection.insert(data,{safe:true},function(error,result){
					console.log(result);
				});
			});
		});
	}

	this.update = function(data){

	}
}
