package com.kiunlx.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kiunlx.dao.UserDao;
import com.kiunlx.entity.User;
import com.kiunlx.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	private UserDao userDao;
	
	@Override
	@Transactional
	public void insertUser(User user) {

		user.setPassword("123123");
		user.setUserName("234234");
		userDao.insert(user);
	}

}
