package com.bis.vo.re;

import java.util.List;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 회차
 * Business Name  : BIT 관련
 * Class Name 	  : CtlrRun.java
 * Description 	  : 
 * Modification History 
 *   수정일                수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.02.21	박주언		created new file
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbDmhTmspaceChartVO {
	private String run_enddt;		//	date				yes		1	
	private String busid;			//	number(9,0)			yes		2	
	private String run_startdt;		//	date				yes		3	
	private String routeid;			//	number(9,0)			yes		4	
	private String compid;			//	number(6,0)			yes		5	
	private String carregno;		//	varchar2(12 byte)	yes		6	
	private String runord;			//	number(4,0)			yes		7	
	private String start_pathseq;	//	number(5,0)			yes		8	
	private String end_pathseq;		//	number(5,0)			yes		9	
	private String total_bstopcnt;	//	number(10,0)		yes		10	
	private String seq_list;		//	varchar2(4000 byte)	yes		11	
	private String node_list;		//	varchar2(4000 byte)	yes		12	
	private String hms_list;		//	varchar2(4000 byte)	yes		13	
	private String coll_list;		//	varchar2(4000 byte)	yes		14	
	private String cross_pass_cnt;	//	number(10,0)		yes		15	
	private String seq_list_1;		//	varchar2(4000 byte)	yes		16	
	private String node_list_1;		//	varchar2(4000 byte)	yes		17	
	private String hms_list_1;		//	varchar2(4000 byte)	yes		18	
	private String coll_list_1;		//	varchar2(4000 byte)	yes		19	
	private String bstop_dep_cnt;	//	number(10,0)		yes		20	
	private String seq_list_3;		//	varchar2(4000 byte)	yes		21	
	private String node_list_3;		//	varchar2(4000 byte)	yes		22	
	private String hms_list_3;		//	varchar2(4000 byte)	yes		23	
	private String coll_list_3;		//	varchar2(4000 byte)	yes		24	
	
	private String search_start_date;
	private String search_end_date;
	private String search_date;
	
	private List<String> busList;
	
	public String getRun_enddt() {
		return run_enddt;
	}
	public void setRun_enddt(String run_enddt) {
		this.run_enddt = run_enddt;
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
	public String getRouteid() {
		return routeid;
	}
	public void setRouteid(String routeid) {
		this.routeid = routeid;
	}
	public String getCompid() {
		return compid;
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
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getCarregno() {
		return carregno;
	}
	public void setCarregno(String carregno) {
		this.carregno = carregno;
	}
	public String getRunord() {
		return runord;
	}
	public void setRunord(String runord) {
		this.runord = runord;
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
	public String getTotal_bstopcnt() {
		return total_bstopcnt;
	}
	public void setTotal_bstopcnt(String total_bstopcnt) {
		this.total_bstopcnt = total_bstopcnt;
	}
	public String getSeq_list() {
		return seq_list;
	}
	public void setSeq_list(String seq_list) {
		this.seq_list = seq_list;
	}
	public String getNode_list() {
		return node_list;
	}
	public void setNode_list(String node_list) {
		this.node_list = node_list;
	}
	public String getHms_list() {
		return hms_list;
	}
	public void setHms_list(String hms_list) {
		this.hms_list = hms_list;
	}
	public String getColl_list() {
		return coll_list;
	}
	public void setColl_list(String coll_list) {
		this.coll_list = coll_list;
	}
	public String getCross_pass_cnt() {
		return cross_pass_cnt;
	}
	public void setCross_pass_cnt(String cross_pass_cnt) {
		this.cross_pass_cnt = cross_pass_cnt;
	}
	public String getSeq_list_1() {
		return seq_list_1;
	}
	public void setSeq_list_1(String seq_list_1) {
		this.seq_list_1 = seq_list_1;
	}
	public String getNode_list_1() {
		return node_list_1;
	}
	public void setNode_list_1(String node_list_1) {
		this.node_list_1 = node_list_1;
	}
	public String getHms_list_1() {
		return hms_list_1;
	}
	public void setHms_list_1(String hms_list_1) {
		this.hms_list_1 = hms_list_1;
	}
	public String getColl_list_1() {
		return coll_list_1;
	}
	public void setColl_list_1(String coll_list_1) {
		this.coll_list_1 = coll_list_1;
	}
	public String getBstop_dep_cnt() {
		return bstop_dep_cnt;
	}
	public void setBstop_dep_cnt(String bstop_dep_cnt) {
		this.bstop_dep_cnt = bstop_dep_cnt;
	}
	public String getSeq_list_3() {
		return seq_list_3;
	}
	public void setSeq_list_3(String seq_list_3) {
		this.seq_list_3 = seq_list_3;
	}
	public String getNode_list_3() {
		return node_list_3;
	}
	public void setNode_list_3(String node_list_3) {
		this.node_list_3 = node_list_3;
	}
	public String getHms_list_3() {
		return hms_list_3;
	}
	public void setHms_list_3(String hms_list_3) {
		this.hms_list_3 = hms_list_3;
	}
	public String getColl_list_3() {
		return coll_list_3;
	}
	public void setColl_list_3(String coll_list_3) {
		this.coll_list_3 = coll_list_3;
	}
	public List<String> getBusList() {
		return busList;
	}
	public void setBusList(List<String> busList) {
		this.busList = busList;
	}
	public String getSearch_date() {
		return search_date;
	}
	public void setSearch_date(String search_date) {
		this.search_date = search_date;
	}
}
