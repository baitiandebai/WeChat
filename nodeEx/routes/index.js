var Page = require('./page');

module.exports = function(app){
	app.get('/effort/login',function(req,res){
		res.render('login');
	});
	app.get('/effort/index',function(req,res){
		res.render('index');
	});
	app.post('/post',function(req,res){
		
		var username = req.body['username'];
		var password = req.body['password'];
		var page = new Page();
		var message = page.check(username,password,function(result){
			console.log("返回的结果是index:" + result);
			if(result != "false"){
				console.log("返回正确了");
				res.json({success:"true"});
			}else{
				console.log("返回错误的结果");
				res.json({success:"false"});
			}

		});
	});
}

