package com.kiunlx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kiunlx.entity.User;
import com.kiunlx.service.LoginService;
import com.kiunlx.util.Result;

@RestController
@RequestMapping(value="/",produces="application/json;charset=utf-8")
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@PostMapping("/up")
	public Result login(){

		loginService.insertUser(new User());
		
		return Result.getResult("成功");
	}
	
	@GetMapping("test")
	public Result test(){
		
		return Result.getResult("成功");
	}
}
