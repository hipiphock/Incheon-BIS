package com.bis.job;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.quartz.QuartzJobBean;

public class ImageDownJob extends QuartzJobBean {
	
//	private Logger log = LogManager.getLogger(this.getClass());

	/** The ctx. */
	private static ApplicationContext ctx = null;

	@Override
    protected void executeInternal(JobExecutionContext arg0) throws JobExecutionException {
    	ctx = (ApplicationContext)arg0.getJobDetail().getJobDataMap().get("applicationContext");
    	/*try{
		    GrobalProps grobalProps = (GrobalProps)ctx.getBean("propertyHolder");
			
		    FtpUtil ftpUtil = new FtpUtil(grobalProps);
		    if(ftpUtil.login()) {
		    	ftpUtil.changeDirectory("/CAPTURE");
		    	boolean isSuccess = ftpUtil.downloadFile(grobalProps.getBitDir(), grobalProps.getCamDir());
		    	log.info("result : " + isSuccess);
			}
		    ftpUtil.logout();
		}catch(NullPointerException e) {
			log.error(e.toString());
    	}catch(Exception e){
    		log.error(e.toString());
    	}*/
    }

    /**
	 * Gets the bean.
	 * 
	 * @param beanId the bean id
	 * @return the bean
	 */
	@SuppressWarnings("unused")
	private static Object getBean(String beanId) {
		return ctx.getBean(beanId);
	}

}