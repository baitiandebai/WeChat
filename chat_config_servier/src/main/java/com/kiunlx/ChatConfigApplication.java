package com.kiunlx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ChatConfigApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ChatConfigApplication.class, args);
	}

}
