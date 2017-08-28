package com.kiunlx.util;

import java.util.HashMap;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;

public class Result {
	
	private int		code;
	
	private String	message;
	
	private Object	data;
	
	public static Result getResult(int code, String message, Object data) {
		Result result = new Result();
		result.code = code;
		result.message = message;
		result.data = data;
		return result;
	}
	
	public static String fail(String message, int code) {
		
		String str = "{}";
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("code", code);
		map.put("message", message);
		try {
			str = JSONObject.toJSONString(map);
		} catch (Exception e) {
		}
		
		return str;
	}
	
	public static Result getResult(Object data) {
		return getResult(200, "success", data);
	}
	
	public static Result getResult(String message, Object data) {
		return getResult(200, message, data);
	}
	
	public static Result getResultError(String message) {
		return getResult(600, message, null);
	}
	
	public static Result getResultSuccess(String message) {
		return getResult(200, message, null);
	}
	
	/**
	 * @return
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return JSONObject.toJSONString(this);
	}
	
	public int getCode() {
		return code;
	}
	
	public void setCode(int code) {
		this.code = code;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public Object getData() {
		return data;
	}
	
	public void setData(Object data) {
		this.data = data;
	}
}
