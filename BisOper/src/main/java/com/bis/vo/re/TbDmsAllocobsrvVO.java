package com.bis.vo.re;

public class TbDmsAllocobsrvVO {
/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 배차준수율 통계 데이터
 * Class Name 	  : TbDmsRunonschedVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.02.07	    주형빈                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2019 by IncheonBis All right reserved.
 */
	
	private String compid;			//NUMBER(6,0)
	private String routeid;			//NUMBER(9,0)
	private String proccyclcd;		//VARCHAR2(1 BYTE)
	private String procdt;			//DATE
	private String runonsched;		//NUMBER(5,2)
	private String avg_runtm;		//NUMBER(10,0)
	private String stddev_runtm;	//NUMBER(10,0)
	private String plan_runtm;		//NUMBER(10,0)
	
	private String search_startdt;
	private String search_enddt;
	private String compnm;
	private String routeno;
	private String val;
	private String id;
	private String nm;
	
	
	
	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getNm() {
		return nm;
	}



	public void setNm(String nm) {
		this.nm = nm;
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



	public String getCompnm() {
		return compnm;
	}



	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}



	public String getRouteno() {
		return routeno;
	}



	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}



	public String getVal() {
		return val;
	}



	public void setVal(String val) {
		this.val = val;
	}



	@Override
	public String toString() {
		return "TbDmsAllocobsrvVO [compid=" + compid + ", routeid=" + routeid
				+ ", proccyclcd=" + proccyclcd + ", procdt=" + procdt
				+ ", runonsched=" + runonsched + ", avg_runtm=" + avg_runtm
				+ ", stddev_runtm=" + stddev_runtm + ", plan_runtm="
				+ plan_runtm + ", search_startdt=" + search_startdt
				+ ", search_enddt=" + search_enddt + ", compnm=" + compnm
				+ ", routeno=" + routeno + ", val=" + val + "]";
	}

}
