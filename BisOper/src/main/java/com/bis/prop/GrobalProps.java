package com.bis.prop;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 
 * Class Name 	  : GrobalProps.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.09.20	    황중모                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
@Component
public class GrobalProps {
	
	//신규
	@Value("${FTP_HOST1}")
	private String ftpIp1;    
	
	@Value("${FTP_PORT1}")
	private String ftpPort1;    
	
	@Value("${FTP_ID1}")
	private String ftpId1;   
	
	@Value("${FTP_PW1}")
	private String ftpPw1;    
	//광역
	@Value("${FTP_HOST2}")
	private String ftpIp2;    
	
	@Value("${FTP_PORT2}")
	private String ftpPort2;    
	
	@Value("${FTP_ID2}")
	private String ftpId2;   
	
	@Value("${FTP_PW2}")
	private String ftpPw2;    
	//인천
	@Value("${FTP_HOST3}")
	private String ftpIp3;    
	
	@Value("${FTP_PORT3}")
	private String ftpPort3;    
	
	@Value("${FTP_ID3}")
	private String ftpId3;   
	
	@Value("${FTP_PW3}")
	private String ftpPw3;  
	//인천
	@Value("${FTP_HOST4}")
	private String ftpIp4;    
	
	@Value("${FTP_PORT4}")
	private String ftpPort4;    
	
	@Value("${FTP_ID4}")
	private String ftpId4;   
	
	@Value("${FTP_PW4}")
	private String ftpPw4;  
	//광역2
	@Value("${FTP_HOST5}")
	private String ftpIp5;    
	
	@Value("${FTP_PORT5}")
	private String ftpPort5;    
	
	@Value("${FTP_ID5}")
	private String ftpId5;   
	
	@Value("${FTP_PW5}")
	private String ftpPw5;  
	//광역2
	@Value("${FTP_HOST6}")
	private String ftpIp6;    
	
	@Value("${FTP_PORT6}")
	private String ftpPort6;    
	
	@Value("${FTP_ID6}")
	private String ftpId6;   
	
	@Value("${FTP_PW6}")
	private String ftpPw6; 
	
	@Value("${RELAY_HOST}")
	private String relayIp;    
	
	@Value("${RELAY_PORT}")
	private String relayPort;  
	
	@Value("${BIT_DIR}")
	private String bitDir;   
	
	@Value("${CAM_DIR}")
	private String camDir;  
	
	@Value("${SCEN_IMG_DIR}")
	private String scenImgDir;
	
	@Value("${SCEN_VIDEO_DIR}")
	private String scenVideoDir;
	
	@Value("${SCEN_PROMO_DIR}")
	private String scenPromoDir;

	@Value("${TEMP_FILE}")
	private String tempfile;
	

	public String getRelayIp() {
		return relayIp;
	}

	public void setRelayIp(String relayIp) {
		this.relayIp = relayIp;
	}

	public String getRelayPort() {
		return relayPort;
	}

	public void setRelayPort(String relayPort) {
		this.relayPort = relayPort;
	}

	public String getBitDir() {
		return bitDir;
	}

	public void setBitDir(String bitDir) {
		this.bitDir = bitDir;
	}

	public String getCamDir() {
		return camDir;
	}

	public void setCamDir(String camDir) {
		this.camDir = camDir;
	}

	public String getScenImgDir() {
		return scenImgDir;
	}

	public void setScenImgDir(String scenImgDir) {
		this.scenImgDir = scenImgDir;
	}

	public String getScenVideoDir() {
		return scenVideoDir;
	}

	public void setScenVideoDir(String scenVideoDir) {
		this.scenVideoDir = scenVideoDir;
	}

	public String getScenPromoDir() {
		return scenPromoDir;
	}

	public void setScenPromoDir(String scenPromoDir) {
		this.scenPromoDir = scenPromoDir;
	}

	public String getTempfile() {
		return tempfile;
	}

	public void setTempfile(String tempfile) {
		this.tempfile = tempfile;
	}

	public String getFtpIp1() {
		return ftpIp1;
	}

	public void setFtpIp1(String ftpIp1) {
		this.ftpIp1 = ftpIp1;
	}

	public String getFtpPort1() {
		return ftpPort1;
	}

	public void setFtpPort1(String ftpPort1) {
		this.ftpPort1 = ftpPort1;
	}

	public String getFtpId1() {
		return ftpId1;
	}

	public void setFtpId1(String ftpId1) {
		this.ftpId1 = ftpId1;
	}

	public String getFtpPw1() {
		return ftpPw1;
	}

	public void setFtpPw1(String ftpPw1) {
		this.ftpPw1 = ftpPw1;
	}

	public String getFtpIp2() {
		return ftpIp2;
	}

	public void setFtpIp2(String ftpIp2) {
		this.ftpIp2 = ftpIp2;
	}

	public String getFtpPort2() {
		return ftpPort2;
	}

	public void setFtpPort2(String ftpPort2) {
		this.ftpPort2 = ftpPort2;
	}

	public String getFtpId2() {
		return ftpId2;
	}

	public void setFtpId2(String ftpId2) {
		this.ftpId2 = ftpId2;
	}

	public String getFtpPw2() {
		return ftpPw2;
	}

	public void setFtpPw2(String ftpPw2) {
		this.ftpPw2 = ftpPw2;
	}

	public String getFtpIp3() {
		return ftpIp3;
	}

	public void setFtpIp3(String ftpIp3) {
		this.ftpIp3 = ftpIp3;
	}

	public String getFtpPort3() {
		return ftpPort3;
	}

	public void setFtpPort3(String ftpPort3) {
		this.ftpPort3 = ftpPort3;
	}

	public String getFtpId3() {
		return ftpId3;
	}

	public void setFtpId3(String ftpId3) {
		this.ftpId3 = ftpId3;
	}

	public String getFtpPw3() {
		return ftpPw3;
	}

	public void setFtpPw3(String ftpPw3) {
		this.ftpPw3 = ftpPw3;
	}

	public String getFtpIp4() {
		return ftpIp4;
	}

	public void setFtpIp4(String ftpIp4) {
		this.ftpIp4 = ftpIp4;
	}

	public String getFtpPort4() {
		return ftpPort4;
	}

	public void setFtpPort4(String ftpPort4) {
		this.ftpPort4 = ftpPort4;
	}

	public String getFtpId4() {
		return ftpId4;
	}

	public void setFtpId4(String ftpId4) {
		this.ftpId4 = ftpId4;
	}

	public String getFtpPw4() {
		return ftpPw4;
	}

	public void setFtpPw4(String ftpPw4) {
		this.ftpPw4 = ftpPw4;
	}

	public String getFtpIp5() {
		return ftpIp5;
	}

	public void setFtpIp5(String ftpIp5) {
		this.ftpIp5 = ftpIp5;
	}

	public String getFtpPort5() {
		return ftpPort5;
	}

	public void setFtpPort5(String ftpPort5) {
		this.ftpPort5 = ftpPort5;
	}

	public String getFtpId5() {
		return ftpId5;
	}

	public void setFtpId5(String ftpId5) {
		this.ftpId5 = ftpId5;
	}

	public String getFtpPw5() {
		return ftpPw5;
	}

	public void setFtpPw5(String ftpPw5) {
		this.ftpPw5 = ftpPw5;
	}

	public String getFtpIp6() {
		return ftpIp6;
	}

	public void setFtpIp6(String ftpIp6) {
		this.ftpIp6 = ftpIp6;
	}

	public String getFtpPort6() {
		return ftpPort6;
	}

	public void setFtpPort6(String ftpPort6) {
		this.ftpPort6 = ftpPort6;
	}

	public String getFtpId6() {
		return ftpId6;
	}

	public void setFtpId6(String ftpId6) {
		this.ftpId6 = ftpId6;
	}

	public String getFtpPw6() {
		return ftpPw6;
	}

	public void setFtpPw6(String ftpPw6) {
		this.ftpPw6 = ftpPw6;
	}
}
