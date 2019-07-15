package com.jfc.jfcsms.main;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@ComponentScan(basePackages="com.jfc.jfcsms")
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
@EnableScheduling
public class JfcServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(JfcServiceApplication.class, args);
		
	}

}
