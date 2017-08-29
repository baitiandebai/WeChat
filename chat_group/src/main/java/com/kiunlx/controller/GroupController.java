package com.kiunlx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kiunlx.service.GroupService;

@RestController
@RequestMapping(value="/",produces="application/json;charset=utf-8")
public class GroupController {

	@Autowired
	private GroupService groupService;
	
	@GetMapping("/demo")
	public Object demo(){
		return groupService.queryStudentInfo();
	}
	@GetMapping("test")
	public Object test(){
		return "成功";
	}
}
