package com.jfc.jfcsms.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfc.jfcsms.api.UserLoginApi;
import com.jfc.jfcsms.model.CronTabTimeJson;
import com.jfc.jfcsms.model.JfcUserJson;
import com.jfc.jfcsms.ps.UserLoginPs;

@Service
public class UserLoginService {

	@Autowired
	private UserLoginPs userLoginPs;

	@Autowired
	private static final Logger LOG = Logger.getLogger(UserLoginService.class);

	public List<JfcUserJson> loginUser(String userName, String password) {
		JfcUserJson jfcUserJson = new JfcUserJson();
		List<JfcUserJson> jfcUserJsonList = new ArrayList<JfcUserJson>();
		List<Object[]> jfcUserobject = userLoginPs.loginUser(userName, password);
		this.setLoginUser(jfcUserobject, jfcUserJson, jfcUserJsonList);

		return jfcUserJsonList;
	}

	private void setLoginUser(List<Object[]> jfcUserobject, JfcUserJson jfcUserJson,
			List<JfcUserJson> jfcUserJsonList) {
		if (null != jfcUserobject) {
			for (Object[] tempObj : jfcUserobject) {
				if (tempObj[0] != null) {
					jfcUserJson.setUserId(tempObj[0].toString());
				}
				if (tempObj[1] != null) {
					jfcUserJson.setFirstName(tempObj[1].toString());
				}
				if (tempObj[2] != null) {
					jfcUserJson.setLastName(tempObj[2].toString());
				}
				if (tempObj[3] != null) {
					jfcUserJson.setUserName(tempObj[3].toString());
				}
				if (tempObj[4] != null) {
					jfcUserJson.setPassword(tempObj[4].toString());
				}
				if (tempObj[5] != null) {
					jfcUserJson.setUserRole(tempObj[5].toString());
				}
				if (tempObj[6] != null) {
					jfcUserJson.setUserStatus(tempObj[6].toString());
				}
				jfcUserJsonList.add(jfcUserJson);
			}
		}

	}

	public Integer setCronJobTime(String cronJobTimehr, String cronJobTimeMin, Integer cronJobId) {
		int object = userLoginPs.setCronJobTime(cronJobTimehr, cronJobTimeMin, cronJobId);
//		if (object == 1) {
//			this.getCronJobTime();
//		}
		return object;
	}

	@PostConstruct
	public CronTabTimeJson getCronJobTime() {
		List<Object[]> cronTabTimes = null;
		
		CronTabTimeJson cronTabTimeJsonObj = new CronTabTimeJson();
		cronTabTimes = userLoginPs.getCronJobTime();
		cronTabTimeJsonObj = this.scheduleCronJobTime(cronTabTimes, cronTabTimeJsonObj);
		System.out.println("HELLLOOOOOOOOOOOOOOOOOO::::::::::::::::::");
		LOG.debug("Scheduled Event: Configuration table loaded/updated from database");
		return cronTabTimeJsonObj;
	}

	private CronTabTimeJson scheduleCronJobTime(List<Object[]> cronTabTimes, CronTabTimeJson cronTabTimeJsonObj) {
		if (null != cronTabTimes) {
			for (Object[] tempObj : cronTabTimes) {
				if (tempObj[0] != null) {
					cronTabTimeJsonObj.setHrTime(tempObj[0].toString());
				}
				if (tempObj[0] != null) {
					cronTabTimeJsonObj.setMinTime(tempObj[1].toString());
				}
			}
		}
		return cronTabTimeJsonObj;
	}

}
