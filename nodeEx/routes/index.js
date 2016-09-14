var Page = require('./page');


module.exports = function(app){
	app.get('/effort/login',function(req,res){
		res.render('login');
	});
	app.get('/effort/index',function(req,res){
		var user = req.session.user;
		var page = new Page();
		page.getAll(function(result){
			res.render('index',{"nickname":user.nickname,"path":user.path,"result":result});
		});
	});
	app.post('/post',function(req,res){
		
		var username = req.body['username'];
		var password = req.body['password'];
		var page = new Page();
		var message = page.check(username,password,function(result){
			if(result != "false"){
				req.session.user = result[0];
				res.json({success:"true"});
			}else{
				res.json({success:"false"});
			}
		});
	});
}

