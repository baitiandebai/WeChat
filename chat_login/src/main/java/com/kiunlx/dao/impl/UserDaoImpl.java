package com.kiunlx.dao.impl;

import org.springframework.stereotype.Repository;

import com.kiunlx.dao.UserDao;
import com.kiunlx.dao.base.BaseDaoImpl;
import com.kiunlx.entity.User;

@Repository
public class UserDaoImpl extends BaseDaoImpl<User, Integer> implements UserDao{

}
