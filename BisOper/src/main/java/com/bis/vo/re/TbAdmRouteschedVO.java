package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 버스 위치 정보
 * Class Name 	  : TbAdmBusVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                      수정자 				수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07	    			김주암               최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbAdmRouteschedVO {

	private String routeid;//	number(9,0)
	private String dowtpcd;//	varchar2(2 byte)
	private String fbus_dephms;//	varchar2(6 byte)
	private String lbus_dephms;//	varchar2(6 byte)
	private String min_allocgap;//	number(3,0)
	private String max_allocgap;//	number(3,0)
	private String descr;//	varchar2(250 byte)
	private String app_startdt;//	date
	private String app_enddt;//	date
	private String useyn;//	varchar2(1 byte)
	private String updd;//t	date
	private String upd_userid;//	varchar2(20 byte)	

	private String operation_type;
	private String searchWord;
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getDowtpcd() {
		return dowtpcd;
	}
	public void setDowtpcd(String dowtpcd) {
		this.dowtpcd = dowtpcd;
	}
	public String getFbus_dephms() {
		return fbus_dephms;
	}
	public void setFbus_dephms(String fbus_dephms) {
		this.fbus_dephms = fbus_dephms;
	}
	public String getLbus_dephms() {
		return lbus_dephms;
	}
	public void setLbus_dephms(String lbus_dephms) {
		this.lbus_dephms = lbus_dephms;
	}
	public String getMin_allocgap() {
		return min_allocgap;
	}
	public void setMin_allocgap(String min_allocgap) {
		this.min_allocgap = min_allocgap;
	}
	public String getMax_allocgap() {
		return max_allocgap;
	}
	public void setMax_allocgap(String max_allocgap) {
		this.max_allocgap = max_allocgap;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public String getApp_startdt() {
		return app_startdt;
	}
	public void setApp_startdt(String app_startdt) {
		this.app_startdt = app_startdt;
	}
	public String getApp_enddt() {
		return app_enddt;
	}
	public void setApp_enddt(String app_enddt) {
		this.app_enddt = app_enddt;
	}
	public String getUseyn() {
		return useyn;
	}
	public void setUseyn(String useyn) {
		this.useyn = useyn;
	}
	public String getUpdd() {
		return updd;
	}
	public void setUpdd(String updd) {
		this.updd = updd;
	}
	public String getUpd_userid() {
		return upd_userid;
	}
	public void setUpd_userid(String upd_userid) {
		this.upd_userid = upd_userid;
	}
	public String getOperation_type() {
		return operation_type;
	}
	public void setOperation_type(String operation_type) {
		this.operation_type = operation_type;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}	
}
