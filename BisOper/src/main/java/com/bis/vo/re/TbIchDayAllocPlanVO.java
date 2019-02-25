package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 배차관리
 * Business Name  : 
 * Class Name 	  : TbIchDayAllocPlanVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.18	박주언		최초 생성
 * </PRE>
 * 
 * @version 1.0
 * @author Copyright (C) 2019 by IncheonBis All right reserved.
 */
public class TbIchDayAllocPlanVO {
	private String routeid;			//	number(9,0)			yes		1	
	private String allocord;		//	number(4,0)			yes		2	
	private String runord;			//	number(4,0)			yes		3	
	private String runymd;			//	date				yes		4	
	private String rowseq;			//	number(6,0)			yes		5	
	private String busid;			//	number(9,0)			yes		6	
	private String driverid;		//	number(10,0)		yes		7	
	private String compid;			//	number(6,0)			yes		8	
	private String reg_userid;		//	varchar2(20 byte)	yes		9	
	private String chg_busid;		//	number(9,0)			yes		10	
	private String chg_driverid;	//	number(10,0)		yes		11	
	private String chg_treatdt;		//	date				yes		12	
	private String sndrsltcd;		//	varchar2(1 byte)	yes		13
	
	// 배차입력현황조회 - selectDispatchPlanList
	private String searchDate;		// 검색용
	private String compnm;
	private String max_run;			// 최대 회차수
	private String org;				// 
	private String tot;				// 
	
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getAllocord() {
		return allocord;
	}
	public void setAllocord(String allocord) {
		this.allocord = allocord;
	}
	public String getRunord() {
		return runord;
	}
	public void setRunord(String runord) {
		this.runord = runord;
	}
	public String getRunymd() {
		return runymd;
	}
	public void setRunymd(String runymd) {
		this.runymd = runymd;
	}
	public String getRowseq() {
		return rowseq;
	}
	public void setRowseq(String rowseq) {
		this.rowseq = rowseq;
	}
	public String getBusid() {
		return busid;
	}
	public void setBusid(String busid) {
		this.busid = busid;
	}
	public String getDriverid() {
		return driverid;
	}
	public void setDriverid(String driverid) {
		this.driverid = driverid;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getReg_userid() {
		return reg_userid;
	}
	public void setReg_userid(String reg_userid) {
		this.reg_userid = reg_userid;
	}
	public String getChg_busid() {
		return chg_busid;
	}
	public void setChg_busid(String chg_busid) {
		this.chg_busid = chg_busid;
	}
	public String getChg_driverid() {
		return chg_driverid;
	}
	public void setChg_driverid(String chg_driverid) {
		this.chg_driverid = chg_driverid;
	}
	public String getChg_treatdt() {
		return chg_treatdt;
	}
	public void setChg_treatdt(String chg_treatdt) {
		this.chg_treatdt = chg_treatdt;
	}
	public String getSndrsltcd() {
		return sndrsltcd;
	}
	public void setSndrsltcd(String sndrsltcd) {
		this.sndrsltcd = sndrsltcd;
	}
	public String getCompnm() {
		return compnm;
	}
	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}
	public String getMax_run() {
		return max_run;
	}
	public void setMax_run(String max_run) {
		this.max_run = max_run;
	}
	public String getOrg() {
		return org;
	}
	public void setOrg(String org) {
		this.org = org;
	}
	public String getTot() {
		return tot;
	}
	public void setTot(String tot) {
		this.tot = tot;
	}
	public String getSearchDate() {
		return searchDate;
	}
	public void setSearchDate(String searchDate) {
		this.searchDate = searchDate;
	}
}
