package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 이의신청내용
 * Class Name 	  : TbIchProtestreqVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2019.01.15	    주형빈                       최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbIchProtestreqVO {
	private String histno;			//NUMBER(10,0)
	private String req_userid;		//VARCHAR2(20 BYTE)
	private String compid;			//NUMBER(6,0)
	private String regdt;			//DATE
	private String req_title;		//VARCHAR2(50 BYTE)
	private String req_detail;		//VARCHAR2(100 BYTE)
	private String treatdt;		//DATE
	private String treat_userid;	//VARCHAR2(20 BYTE)
	private String reqtreatcd;		//VARCHAR2(1 BYTE)
	private String treat_detail;	//VARCHAR2(100 BYTE)
	
	private String compnm;
	private String search_startdt;
	private String search_enddt;
	

	public String getHistno() {
		return histno;
	}

	public void setHistno(String histno) {
		this.histno = histno;
	}

	public String getReq_userid() {
		return req_userid;
	}

	public void setReq_userid(String req_userid) {
		this.req_userid = req_userid;
	}

	public String getCompid() {
		return compid;
	}

	public void setCompid(String compid) {
		this.compid = compid;
	}

	public String getRegdt() {
		return regdt;
	}

	public void setRegdt(String regdt) {
		this.regdt = regdt;
	}

	public String getReq_title() {
		return req_title;
	}

	public void setReq_title(String req_title) {
		this.req_title = req_title;
	}

	public String getReq_detail() {
		return req_detail;
	}

	public void setReq_detail(String req_detail) {
		this.req_detail = req_detail;
	}

	public String getTreatdt() {
		return treatdt;
	}

	public void setTreatdt(String treatdt) {
		this.treatdt = treatdt;
	}

	public String getTreat_userid() {
		return treat_userid;
	}

	public void setTreat_userid(String treat_userid) {
		this.treat_userid = treat_userid;
	}

	public String getReqtreatcd() {
		return reqtreatcd;
	}

	public void setReqtreatcd(String reqtreatcd) {
		this.reqtreatcd = reqtreatcd;
	}

	public String getTreat_detail() {
		return treat_detail;
	}

	public void setTreat_detail(String treat_detail) {
		this.treat_detail = treat_detail;
	}

	public String getCompnm() {
		return compnm;
	}

	public void setCompnm(String compnm) {
		this.compnm = compnm;
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

	@Override
	public String toString() {
		return "TbIchProtestreqVO [histno=" + histno + ", req_userid="
				+ req_userid + ", compid=" + compid + ", regdt=" + regdt
				+ ", req_title=" + req_title + ", req_detail=" + req_detail
				+ ", treatdt=" + treatdt + ", treat_userid=" + treat_userid
				+ ", reqtreatcd=" + reqtreatcd + ", treat_detail="
				+ treat_detail + ", compnm=" + compnm + ", search_startdt="
				+ search_startdt + ", search_enddt=" + search_enddt + "]";
	}
	
	
	
	
	
	
	
}
