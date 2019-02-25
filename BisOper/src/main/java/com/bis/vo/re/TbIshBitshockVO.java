package com.bis.vo.re;

/**
 * 
 * <PRE>
 * System Name 	  : 인천 BIS - 운영단말
 * Business Name  : 충격감지 이력
 * Class Name 	  : TbIshBitshockVO.java
 * Description 	  : 
 * Modification History 
 *   수정일                        수정자       		    수정내용
 * ----------   ---------   -------------------------------
 * 2017.11.07					김주암					최초생성
 * </PRE>
 * @version 1.0
 * @author Copyright (C) 2017 by IncheonBis All right reserved.
 */
public class TbIshBitshockVO {
	
	private String colldt;// 	date
	private String bitid;// 	number(7,0)
	private String msgseq;// 	number(10,0)
	private String shockvalue;// 	number(2,0)
	private String shockdt;// 	date
	private String description;// 	varchar2(128 byte)
		
	// selectShockHisList / 충격감지 이력	
	private String searchWord;
	private String start_date_time;
	private String end_date_time;
	private String check_all;	
	private String bstopnm;	
	private String short_bstopid;
	
	//v0611
	private String issuedt;
	private String enddt;
	private String startdt;
	

	public String getEnddt() {
		return enddt;
	}
	public void setEnddt(String enddt) {
		this.enddt = enddt;
	}
	public String getStartdt() {
		return startdt;
	}
	public void setStartdt(String startdt) {
		this.startdt = startdt;
	}
	public String getIssuedt() {
		return issuedt;
	}
	public void setIssuedt(String issuedt) {
		this.issuedt = issuedt;
	}
	public String getColldt() {
		return colldt;
	}
	public void setColldt(String colldt) {
		this.colldt = colldt;
	}
	public String getBitid() {
		return bitid;
	}
	public void setBitid(String bitid) {
		this.bitid = bitid;
	}
	public String getMsgseq() {
		return msgseq;
	}
	public void setMsgseq(String msgseq) {
		this.msgseq = msgseq;
	}
	public String getShockvalue() {
		return shockvalue;
	}
	public void setShockvalue(String shockvalue) {
		this.shockvalue = shockvalue;
	}
	public String getShockdt() {
		return shockdt;
	}
	public void setShockdt(String shockdt) {
		this.shockdt = shockdt;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSearchWord() {
		return searchWord;
	}
	public void setSearchWord(String searchWord) {
		this.searchWord = searchWord;
	}
	public String getStart_date_time() {
		return start_date_time;
	}
	public void setStart_date_time(String start_date_time) {
		this.start_date_time = start_date_time;
	}
	public String getEnd_date_time() {
		return end_date_time;
	}
	public void setEnd_date_time(String end_date_time) {
		this.end_date_time = end_date_time;
	}
	public String getCheck_all() {
		return check_all;
	}
	public void setCheck_all(String check_all) {
		this.check_all = check_all;
	}
	public String getBstopnm() {
		return bstopnm;
	}
	public void setBstopnm(String bstopnm) {
		this.bstopnm = bstopnm;
	}
	public String getShort_bstopid() {
		return short_bstopid;
	}
	public void setShort_bstopid(String short_bstopid) {
		this.short_bstopid = short_bstopid;
	}	
}
