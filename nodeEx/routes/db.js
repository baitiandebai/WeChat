var mongodb = require('mongodb');


function Con(){
	this.getCon = function(){
		var server = new mongodb.Server("localhost",27017,{safe:true});
		var db = new mongodb.Db('db_2',server);
		return db;
	}
}
module.exports = function(){

	this.read = function (data,callback){
		var con = new Con();
	    var db = con.getCon();
		db.open(function(error,db){
			if(error) throw error;
			db.collection("user",function(error,collection){
				collection.find(data).toArray(function(error,doc){
					if(error){
						console.log("错误");
					}
					var s = JSON.stringify(doc);
					console.log(s + "S的值是");
					if(s !="undefined" && s != null && s != "[]"){
					   console.log("正确显示的了");
					   callback(doc);
					}else{
						console.log("错误的显示啊！");
						callback("false");
					}
									
				});
			});
		});
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
