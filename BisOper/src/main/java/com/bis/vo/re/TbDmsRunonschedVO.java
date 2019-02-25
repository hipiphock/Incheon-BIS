package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 
 * Business Name  : 버스 정시 도착
 * Class Name 	  : TbDmsRunonschedVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                  수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.23	박주언		created new file
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbDmsRunonschedVO {
	private String compid;			//	number(6,0)			yes		1	
	private String routeid;			//	number(9,0)			yes		2	
	private String proccyclcd;		//	varchar2(1 bnyte)	yes		3	
	private String procdt;			//	date				yes		4	
	private String runonsched;		//	number(5,2)			yes		5	
	private String avg_runtm;		//	number(10,0)		yes		6	
	private String stddev_runtm;	//	number(10,0)		yes		7	
	private String plan_runtm;		//	number(10,0)		yes		8
	
	private String search_start_date;
	private String search_end_date;
	
	private String compnm;
	private String routeno;
	private String dt;
	private String val;
	
	public String getCompnm() {
		return compnm;
	}
	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}
	public String getDt() {
		return dt;
	}
	public void setDt(String dt) {
		this.dt = dt;
	}
	public String getVal() {
		return val;
	}
	public void setVal(String val) {
		this.val = val;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getProccyclcd() {
		return proccyclcd;
	}
	public void setProccyclcd(String proccyclcd) {
		this.proccyclcd = proccyclcd;
	}
	public String getProcdt() {
		return procdt;
	}
	public void setProcdt(String procdt) {
		this.procdt = procdt;
	}
	public String getRunonsched() {
		return runonsched;
	}
	public void setRunonsched(String runonsched) {
		this.runonsched = runonsched;
	}
	public String getAvg_runtm() {
		return avg_runtm;
	}
	public void setAvg_runtm(String avg_runtm) {
		this.avg_runtm = avg_runtm;
	}
	public String getStddev_runtm() {
		return stddev_runtm;
	}
	public void setStddev_runtm(String stddev_runtm) {
		this.stddev_runtm = stddev_runtm;
	}
	public String getPlan_runtm() {
		return plan_runtm;
	}
	public void setPlan_runtm(String plan_runtm) {
		this.plan_runtm = plan_runtm;
	}
	public String getSearch_start_date() {
		return search_start_date;
	}
	public void setSearch_start_date(String search_start_date) {
		this.search_start_date = search_start_date;
	}
	public String getSearch_end_date() {
		return search_end_date;
	}
	public void setSearch_end_date(String search_end_date) {
		this.search_end_date = search_end_date;
	}
	public String getRouteno() {
		return routeno;
	}
	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}
	
}
