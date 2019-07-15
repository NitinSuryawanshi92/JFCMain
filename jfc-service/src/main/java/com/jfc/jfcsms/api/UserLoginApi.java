package com.jfc.jfcsms.api;

import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.jfc.jfcsms.model.JfcUserJson;
import com.jfc.jfcsms.service.UserLoginService;

@RestController
public class UserLoginApi {

	@Autowired(required = true)
	private UserLoginService userLoginService;
	private static final Logger LOG = Logger.getLogger(UserLoginApi.class);

	@RequestMapping("/getloginUser")
	@CrossOrigin(exposedHeaders = "Access-Control-Allow-Origin")
	public ResponseEntity<List<JfcUserJson>> userLogin(@RequestParam("userName") String userName,
			@RequestParam("password") String password) {
		try {
			List<JfcUserJson> jfcUserJson = this.userLoginService.loginUser(userName, password);
			
			return ResponseEntity.ok(jfcUserJson);
		} catch (Exception e) {
			LOG.error("Error in User Login = " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@RequestMapping("/setCronJobTime")
	@CrossOrigin(exposedHeaders = "Access-Control-Allow-Origin")
	public Integer setCronJobTime(@RequestParam("cronJobTimehr") String cronJobTimehr,
			@RequestParam("cronJobTimeMin") String cronJobTimeMin,
			@RequestParam("cronJobId") Integer cronJobId) {
		int object = 0;
		try {
			object = this.userLoginService.setCronJobTime(cronJobTimehr, cronJobTimeMin,cronJobId);
			return object;
		} catch (Exception e) {
			LOG.log(Level.ERROR, e.getMessage());
		}
		return object;
	}
}
