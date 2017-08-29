package com.kiunlx.cache;

import java.util.concurrent.TimeUnit;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;

public class TokenCache {

	static Cache<String,Object> cache = CacheBuilder.newBuilder()
			.initialCapacity(100)
			.concurrencyLevel(10)
			.expireAfterWrite(600, TimeUnit.SECONDS).build();
	
	public static String get(String key){
		return (String) cache.getIfPresent(key);
	}
	
	public static void put(String key){
		cache.put(key, 1);
	}
}
