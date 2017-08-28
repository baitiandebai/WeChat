package com.kiunlx.dao.base;

public interface BaseDao<T,K>{

	T get(String columnName, String value);

	void insert(T t);

	void update(T t);

	T get(K id);

	void delete(T t);
}