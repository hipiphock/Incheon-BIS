package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 버스운행
 * Class Name 	  : TbDmhBusrunrecVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.15	    주형빈                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2019 by IncheonBis All right reserved.
 */
public class TbDmhBusrunrecVO {
	private String busid;	//number(9,0)
	private String run_startdt;	//date
	private String run_enddt;	//date
	private String routeid;	//number(9,0)
	private String driverid;	//number(10,0)
	private String compid;	//number(6,0)
	private String plan_runord;	//number(10,0)
	private String real_runord;	//number(4,0)
	private String start_pathseq;	//number(5,0)
	private String end_pathseq; //number(5,0)
	private String detect_nodecnt;	//number(5,0)
	private String runspd;	//number(4,1)
	private String rundist;	//number(10,0)
	private String runtm;	//number(10,0)
	private String overspdcnt;	//number(10,0)
	private String openruncnt;	//number(10,0)
	private String accelcnt;	//number(10,0)
	private String decelcnt;	//number(10,0)
	private String outroutecnt;	//number(10,0)
	private String stopskipcnt;	//number(10,0)
	private String voldelaycnt;	//number(10,0)
	private String trblcnt;	//number(10,0)
	private String accidcnt;	//number(10,0)
	private String emgcycnt;	//number(10,0)
	private String bstop_arriv_cnt;	//number(6,0)
	private String bstop_dep_cnt;	//number(6,0)
	private String cross_pass_cnt;	//number(6,0)
	private String total_nodecnt;	//number(5,0)
	private String total_bstopcnt;	//number(10,0)
	private String target_cnt;	//number(6,0)
	private String coll_cnt;	//number(6,0)
	private String real_run_startdt;	//date
	private String real_run_enddt;	//date
	
	private String compnm;
	private String cnt;
	private String tot;
	private String search_startdt;
	private String search_enddt;
	private String search_date;
	private String routeno;
	private String carno;
	private String viol_cnt;
	private String routetpcd;
	private String runcnt;
	private String runbuscnt;
	
	
	
	
	public String getRuncnt() {
		return runcnt;
	}
	public void setRuncnt(String runcnt) {
		this.runcnt = runcnt;
	}
	public String getRunbuscnt() {
		return runbuscnt;
	}
	public void setRunbuscnt(String runbuscnt) {
		this.runbuscnt = runbuscnt;
	}
	public String getRoutetpcd() {
		return routetpcd;
	}
	public void setRoutetpcd(String routetpcd) {
		this.routetpcd = routetpcd;
	}
	public String getBusid() {
		return busid;
	}
	public void setBusid(String busid) {
		this.busid = busid;
	}
	public String getRun_startdt() {
		return run_startdt;
	}
	public void setRun_startdt(String run_startdt) {
		this.run_startdt = run_startdt;
	}
	public String getRun_enddt() {
		return run_enddt;
	}
	public void setRun_enddt(String run_enddt) {
		this.run_enddt = run_enddt;
	}
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
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
	public String getPlan_runord() {
		return plan_runord;
	}
	public void setPlan_runord(String plan_runord) {
		this.plan_runord = plan_runord;
	}
	public String getReal_runord() {
		return real_runord;
	}
	public void setReal_runord(String real_runord) {
		this.real_runord = real_runord;
	}
	public String getStart_pathseq() {
		return start_pathseq;
	}
	public void setStart_pathseq(String start_pathseq) {
		this.start_pathseq = start_pathseq;
	}
	public String getEnd_pathseq() {
		return end_pathseq;
	}
	public void setEnd_pathseq(String end_pathseq) {
		this.end_pathseq = end_pathseq;
	}
	public String getDetect_nodecnt() {
		return detect_nodecnt;
	}
	public void setDetect_nodecnt(String detect_nodecnt) {
		this.detect_nodecnt = detect_nodecnt;
	}
	public String getRunspd() {
		return runspd;
	}
	public void setRunspd(String runspd) {
		this.runspd = runspd;
	}
	public String getRundist() {
		return rundist;
	}
	public void setRundist(String rundist) {
		this.rundist = rundist;
	}
	public String getRuntm() {
		return runtm;
	}
	public void setRuntm(String runtm) {
		this.runtm = runtm;
	}
	public String getOverspdcnt() {
		return overspdcnt;
	}
	public void setOverspdcnt(String overspdcnt) {
		this.overspdcnt = overspdcnt;
	}
	public String getOpenruncnt() {
		return openruncnt;
	}
	public void setOpenruncnt(String openruncnt) {
		this.openruncnt = openruncnt;
	}
	public String getAccelcnt() {
		return accelcnt;
	}
	public void setAccelcnt(String accelcnt) {
		this.accelcnt = accelcnt;
	}
	public String getDecelcnt() {
		return decelcnt;
	}
	public void setDecelcnt(String decelcnt) {
		this.decelcnt = decelcnt;
	}
	public String getOutroutecnt() {
		return outroutecnt;
	}
	public void setOutroutecnt(String outroutecnt) {
		this.outroutecnt = outroutecnt;
	}
	public String getStopskipcnt() {
		return stopskipcnt;
	}
	public void setStopskipcnt(String stopskipcnt) {
		this.stopskipcnt = stopskipcnt;
	}
	public String getVoldelaycnt() {
		return voldelaycnt;
	}
	public void setVoldelaycnt(String voldelaycnt) {
		this.voldelaycnt = voldelaycnt;
	}
	public String getTrblcnt() {
		return trblcnt;
	}
	public void setTrblcnt(String trblcnt) {
		this.trblcnt = trblcnt;
	}
	public String getAccidcnt() {
		return accidcnt;
	}
	public void setAccidcnt(String accidcnt) {
		this.accidcnt = accidcnt;
	}
	public String getEmgcycnt() {
		return emgcycnt;
	}
	public void setEmgcycnt(String emgcycnt) {
		this.emgcycnt = emgcycnt;
	}
	public String getBstop_arriv_cnt() {
		return bstop_arriv_cnt;
	}
	public void setBstop_arriv_cnt(String bstop_arriv_cnt) {
		this.bstop_arriv_cnt = bstop_arriv_cnt;
	}
	public String getBstop_dep_cnt() {
		return bstop_dep_cnt;
	}
	public void setBstop_dep_cnt(String bstop_dep_cnt) {
		this.bstop_dep_cnt = bstop_dep_cnt;
	}
	public String getCross_pass_cnt() {
		return cross_pass_cnt;
	}
	public void setCross_pass_cnt(String cross_pass_cnt) {
		this.cross_pass_cnt = cross_pass_cnt;
	}
	public String getTotal_nodecnt() {
		return total_nodecnt;
	}
	public void setTotal_nodecnt(String total_nodecnt) {
		this.total_nodecnt = total_nodecnt;
	}
	public String getTotal_bstopcnt() {
		return total_bstopcnt;
	}
	public void setTotal_bstopcnt(String total_bstopcnt) {
		this.total_bstopcnt = total_bstopcnt;
	}
	public String getTarget_cnt() {
		return target_cnt;
	}
	public void setTarget_cnt(String target_cnt) {
		this.target_cnt = target_cnt;
	}
	public String getColl_cnt() {
		return coll_cnt;
	}
	public void setColl_cnt(String coll_cnt) {
		this.coll_cnt = coll_cnt;
	}
	public String getReal_run_startdt() {
		return real_run_startdt;
	}
	public void setReal_run_startdt(String real_run_startdt) {
		this.real_run_startdt = real_run_startdt;
	}
	public String getReal_run_enddt() {
		return real_run_enddt;
	}
	public void setReal_run_enddt(String real_run_enddt) {
		this.real_run_enddt = real_run_enddt;
	}
	public String getCompnm() {
		return compnm;
	}
	public void setCompnm(String compnm) {
		this.compnm = compnm;
	}
	public String getTot() {
		return tot;
	}
	public void setTot(String tot) {
		this.tot = tot;
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
	public String getCnt() {
		return cnt;
	}
	public void setCnt(String cnt) {
		this.cnt = cnt;
	}
	public String getSearch_date() {
		return search_date;
	}
	public void setSearch_date(String search_date) {
		this.search_date = search_date;
	}
	public String getRouteno() {
		return routeno;
	}
	public void setRouteno(String routeno) {
		this.routeno = routeno;
	}
	public String getCarno() {
		return carno;
	}
	public void setCarno(String carno) {
		this.carno = carno;
	}
	public String getViol_cnt() {
		return viol_cnt;
	}
	public void setViol_cnt(String viol_cnt) {
		this.viol_cnt = viol_cnt;
	}
	
	
	
	
	
}
