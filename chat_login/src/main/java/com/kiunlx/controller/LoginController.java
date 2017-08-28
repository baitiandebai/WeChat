package com.kiunlx.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kiunlx.util.Result;

@RestController
@RequestMapping(value="api/login",produces="application/json;charset=utf-8")
public class LoginController {

	@PostMapping("/")
	public Result login(){

		return Result.getResult("成功");
	}
	
	@GetMapping("test")
	public Result test(){
		
		return Result.getResult("成功");
	}
}
