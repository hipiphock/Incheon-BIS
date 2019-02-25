package com.bis.vo.re;
/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 교통상황연계정보
 * Class Name 	  : TbEchExorgincidVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.02.18	   주형빈                      최초생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbEchExorgincidVO {

	private String incidid;			//VARCHAR2(20 BYTE)
	private String upd_regseq;		//NUMBER(10,0)
	private String relatorgid;		//VARCHAR2(8 BYTE)
	private String incidtpcd;		//VARCHAR2(2 BYTE)
	private String incid_detail;	//VARCHAR2(100 BYTE)
	private String incid_occurdt;	//DATE
	private String incid_enddt;		//DATE
	private String colldt;			//DATE
	
	private String search_startdt;
	private String search_enddt;
	private String incidtpnm;
	private String relatorgnm;
	
	
	
	public String getIncidid() {
		return incidid;
	}
	public void setIncidid(String incidid) {
		this.incidid = incidid;
	}
	public String getUpd_regseq() {
		return upd_regseq;
	}
	public void setUpd_regseq(String upd_regseq) {
		this.upd_regseq = upd_regseq;
	}
	public String getRelatorgid() {
		return relatorgid;
	}
	public void setRelatorgid(String relatorgid) {
		this.relatorgid = relatorgid;
	}
	public String getIncidtpcd() {
		return incidtpcd;
	}
	public void setIncidtpcd(String incidtpcd) {
		this.incidtpcd = incidtpcd;
	}
	public String getIncid_detail() {
		return incid_detail;
	}
	public void setIncid_detail(String incid_detail) {
		this.incid_detail = incid_detail;
	}
	public String getIncid_occurdt() {
		return incid_occurdt;
	}
	public void setIncid_occurdt(String incid_occurdt) {
		this.incid_occurdt = incid_occurdt;
	}
	public String getIncid_enddt() {
		return incid_enddt;
	}
	public void setIncid_enddt(String incid_enddt) {
		this.incid_enddt = incid_enddt;
	}
	public String getColldt() {
		return colldt;
	}
	public void setColldt(String colldt) {
		this.colldt = colldt;
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
	public String getIncidtpnm() {
		return incidtpnm;
	}
	public void setIncidtpnm(String incidtpnm) {
		this.incidtpnm = incidtpnm;
	}
	public String getRelatorgnm() {
		return relatorgnm;
	}
	public void setRelatorgnm(String relatorgnm) {
		this.relatorgnm = relatorgnm;
	}
	
	
	
	
}
