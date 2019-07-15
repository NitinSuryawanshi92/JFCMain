package com.jfc.jfcsms.ps;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.TimeUnit;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

@SuppressWarnings("unused")
@Repository
public class UserLoginPs {

	@PersistenceContext
	EntityManager entityManager;
	private static final Logger LOG = Logger.getLogger(UserLoginPs.class);

	/* method for login User */
	@SuppressWarnings("unchecked")
	public List<Object[]> loginUser(String userName, String password) {
		List<Object[]> JfcUserObject = null;
		try {
			Query query = this.entityManager.createNativeQuery(queryToFetchuserobject());
			if (!StringUtils.isEmpty(userName)) {
				query.setParameter(1, userName);
			}
			if (!StringUtils.isEmpty(password)) {
				query.setParameter(2, password);
			}
			JfcUserObject = query.getResultList();
		} catch (Exception e) {
			LOG.error("Exception occured in for login User :::::::::::::::::: " + e.getMessage());
			throw e;
		} finally {
			this.entityManager.close();
		}
		return JfcUserObject;

	}

	/* query for get login User data */
	private String queryToFetchuserobject() {
		StringBuffer sb = new StringBuffer(500);

		sb.append(" select user_id,first_name,last_name,user_name,password,user_role,user_status from jfc_user ");
		sb.append(" where user_name= ? AND password = ? ");
		return sb.toString();
	}

	@Transactional
	public Integer setCronJobTime(String cronJobTimehr, String cronJobTimeMin, Integer cronJobId) {
		int updateStatus = 0;
		try {
			Query query = this.entityManager.createNativeQuery(createQueryForSetCronJobTime());
			query.setParameter(1, cronJobTimehr);
			query.setParameter(2, cronJobTimeMin);
			query.setParameter(3, cronJobId);

			updateStatus = query.executeUpdate();
			
		} catch (Exception e) {
			LOG.log(Level.ERROR, e.getMessage());
		} finally {
			this.entityManager.close();
		}

		return updateStatus;
	}

	private String createQueryForSetCronJobTime() {
		StringBuffer sb = new StringBuffer();
		sb.append(
				" UPDATE jfc_cron_job_time  SET jfc_cron_job_time_hr= ?, jfc_cron_job_time_min= ?  Where id_cron_job= ? ");
		return sb.toString();
	}

	@SuppressWarnings("unchecked")
	public List<Object[]> getCronJobTime() {

		List<Object[]> cronTabValue = null;
		try {
			Query query = this.entityManager.createNativeQuery(createQueryForGetCrontabtablevalue());
			cronTabValue = query.getResultList();
			// this.setCronTabTime(cronTabValue);
		} catch (Exception e) {
			LOG.log(Level.ERROR, e.getMessage());
		} finally {
			this.entityManager.close();
		}
		return cronTabValue;
	}

//	private void setCronTabTime(List<Object[]> cronTabValue) {
//
//		if (null != cronTabValue) {
//			for (Object[] tempObj : cronTabValue) {
//				if (tempObj[0] != null) {
//					this.CronHrTime=tempObj[0].toString();
//					
//				}
//				if (tempObj[1] != null) {
//					this.CronMinTime=tempObj[1].toString();
//				}
//			}
//		}
//	}
	private String createQueryForGetCrontabtablevalue() {
		StringBuffer sb = new StringBuffer();
		sb.append(" SELECT jfc_cron_job_time_hr,jfc_cron_job_time_min from jfc_cron_job_time");
		return sb.toString();
	}

//	@Scheduled(cron = (this.CronMinTime + " " +this.CronHrTime +  * * * ?")
//	public void run()throws InterruptedException {
//		///home/atcs/Desktop/script/copy.sh
//		System.out.println("done");
//		Thread.sleep(1000);
//		
//	}
}
