package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 연계정보 송수신이력 관리
 * Class Name 	  : TbEchLnkdsndrcvVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.24	   주형빈                      최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */

public class TbEchLnkdsndrcvVO {
	
	private String colldt;			//DATE
	private String relatorgid;		//VARCHAR2(8 BYTE)
	private String lnkdinfotpcd;	//VARCHAR2(1 BYTE)
	private String sndrsltcd;		//VARCHAR2(1 BYTE)
	private String commerrcd;		//VARCHAR2(2 BYTE)
	        
	private String search_startdt;
	private String search_enddt;
	private String relatorgnm;
	
	
	public String getColldt() {
		return colldt;
	}
	public void setColldt(String colldt) {
		this.colldt = colldt;
	}
	public String getRelatorgid() {
		return relatorgid;
	}
	public void setRelatorgid(String relatorgid) {
		this.relatorgid = relatorgid;
	}
	public String getLnkdinfotpcd() {
		return lnkdinfotpcd;
	}
	public void setLnkdinfotpcd(String lnkdinfotpcd) {
		this.lnkdinfotpcd = lnkdinfotpcd;
	}
	public String getSndrsltcd() {
		return sndrsltcd;
	}
	public void setSndrsltcd(String sndrsltcd) {
		this.sndrsltcd = sndrsltcd;
	}
	public String getCommerrcd() {
		return commerrcd;
	}
	public void setCommerrcd(String commerrcd) {
		this.commerrcd = commerrcd;
	}
	public String getSearch_startdt() {
		return search_startdt;
	}
	public void setSearch_startdt(String search_startdt) {
		this.search_startdt = search_startdt;
	}
	public String getSearch_enddt() {
		return search_enddt;
	}
	public void setSearch_enddt(String search_enddt) {
		this.search_enddt = search_enddt;
	}
	public String getRelatorgnm() {
		return relatorgnm;
	}
	public void setRelatorgnm(String relatorgnm) {
		this.relatorgnm = relatorgnm;
	}
	
	
	
}
