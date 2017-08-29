package com.kiunlx.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.kiunlx.service.GroupService;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@Service
public class GroupServiceImpl implements GroupService{

	@Autowired
	private RestTemplate restTemplate;
	
	final String SERVICE_NAME = "login";

	@Override
	@HystrixCommand(fallbackMethod = "fallbackSearchAll")
	public Object queryStudentInfo() {
		
		String url = "http://"+SERVICE_NAME+"/test";
		return restTemplate.getForObject(url, Object.class);
	}

	@SuppressWarnings("unused")
	private Object fallbackSearchAll() {
		System.out.println("段路由拦截,分组");
		
		Object object = "23423423";
		
		return object;
	}
}
